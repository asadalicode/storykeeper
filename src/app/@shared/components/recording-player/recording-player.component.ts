import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import getBlobDuration from 'get-blob-duration';
import { Location } from '@angular/common';

import {
  VoiceRecorder,
  VoiceRecorderPlugin,
  RecordingData,
  GenericResponse,
  CurrentRecordingStatus,
} from 'capacitor-voice-recorder';
import { Utils } from '@app/@shared/appConstants';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-recording-player',
  templateUrl: './recording-player.component.html',
  styleUrls: ['./recording-player.component.scss'],
})
export class RecordingPlayerComponent implements OnInit, OnDestroy {
  step = 0;
  isPlaying = false; //onditions for play pause buttons
  isPlayable = false; //when wave is ready and audio is loaded
  hasRecordingPermission = false; //permission granted by user device
  isRecStarted = false; //false when recording has not started yet
  isRecorded = false; // When audio is recoded and ready to be played
  @ViewChild('basicTimer', { static: false }) basictimer: any;
  @Output() audioFileAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() audioStopped: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private cdr: ChangeDetectorRef,
    private _location: Location,
    private toastService: ToastService,
    private platform: Platform
  ) {
    this.setRecordingEvents();
  }

  ngOnInit(): void {
    if (this.isWeb) {
      this.draw();
    }
  }

  goBack() {
    this._location.back();
  }

  @Input() set startRecord(event: any) {
    if (event) {
      this.startRecording();
    }
  }

  async draw() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream: any = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      const audioContext = new AudioContext();
      const mediaStreamAudioSourceNode = audioContext.createMediaStreamSource(stream);
      const analyserNode = audioContext.createAnalyser();
      mediaStreamAudioSourceNode.connect(analyserNode);

      const pcmData = new Float32Array(analyserNode.fftSize);
      const onFrame = () => {
        analyserNode.getFloatTimeDomainData(pcmData);
        let sumSquares = 0.0;
        for (const amplitude of pcmData) {
          sumSquares += amplitude * amplitude;
        }
        let volumeMeter = Math.sqrt(sumSquares / pcmData.length);
        this.step = volumeMeter;
        window.requestAnimationFrame(onFrame);
      };
      window.requestAnimationFrame(onFrame);
    }
  }

  startRecording() {
    VoiceRecorder.startRecording()
      .then((result: GenericResponse) => {
        if (result.value) {
          this.isPlaying = true;
          this.isRecStarted = true;
          this.basictimer.start();
        }
      })
      .catch((error) => {
        this.toastService.showToast('success', 'Please grant microphone access and visit this screen again');
        console.log(error);
      });
  }

  pauseRecording() {
    VoiceRecorder.pauseRecording()
      .then((result: GenericResponse) => {
        if (result.value) {
          this.isPlaying = false;
          this.basictimer.stop();
        }
      })
      .catch((error) => console.log(error));
  }

  resumeRecording() {
    VoiceRecorder.resumeRecording()
      .then((result: GenericResponse) => {
        if (result.value) {
          this.isPlaying = true;
          this.basictimer.resume();
        }
      })
      .catch((error) => console.log(error));
  }

  stopRecording() {
    this.basictimer.stop();
    VoiceRecorder.stopRecording().then((result: RecordingData) => {
      const audioRef = this.isWeb
        ? new Audio(`${result.value.recordDataBase64}`)
        : new Audio(`data:${result.value.mimeType};base64,${result.value.recordDataBase64}`); //For web and mobile
      if (result.value) {
        this.audioStopped.emit({ audio: audioRef, event: true });
      }
      this.recordedFileDuration(result.value.recordDataBase64);
      // if (this.wave) this.wave.destroy()
    });
  }

  async recordedFileDuration(blobURL: any) {
    const blobUrl = blobURL;
    Utils.converToBlob(blobUrl.replace(/^[^,]+,/, '')).then((res: any) => {
      this.audioFileAction.emit(res);
    });
    const duration = await getBlobDuration(blobUrl);
  }

  setRecordingEvents() {
    VoiceRecorder.canDeviceVoiceRecord().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => {
      if (result.value) {
        this.hasRecordingPermission = true;
      }
      // if (typeof result.value == 'undefined') {
      //   this.hasRecordingPermission = true;
      //   this.startRecording();
      // }
    });
    VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => {
      if (result.value) {
        this.hasRecordingPermission = true;
      }
    });
  }

  // playRecordedSound(result: any) {
  //   const base64Sound = result.value.recordDataBase64; // from plugin
  //   const mimeType = result.value.mimeType; // from plugin
  //   const audioRef = this.isWeb ? new Audio(`${base64Sound}`):new Audio(`data:${mimeType};base64,${base64Sound}`); //For web and mobile
  //   audioRef.load();
  //   audioRef.oncanplaythrough = (e: any) => {
  //   this.recordedFileDuration(e.path[0].currentSrc)
  //     Utils.dataUrlToFile(e.path[0].currentSrc, "abc.mp3").then((res:any)=> {
  //       console.log(res)
  //     })
  //     audioRef.play();
  //   };
  // }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  ngOnDestroy() {
    if (this.hasRecordingPermission && this.isRecStarted) {
      VoiceRecorder.stopRecording();
    }
  }
}
