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
import { AudioRecordRtcService } from '@app/@shared/sevices/audioRecord.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-recording-player',
  templateUrl: './recording-player.component.html',
  styleUrls: ['./recording-player.component.scss'],
})
export class RecordingPlayerComponent implements OnInit, OnDestroy {
  step = 0;
  audioBlobUrl: any;
  audioBlob!: Blob;
  audioName: any;
  audioStream: any;
  audioConf = { audio: true };

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
    private audioRecordingService: AudioRecordRtcService,
    private sanitizer: DomSanitizer,
    private _location: Location,
    private toastService: ToastService,
    private platform: Platform
  ) {
    this.setRecordingEvents();
  }

  ngOnInit(): void {}

  goBack() {
    this._location.back();
  }

  @Input() set startRecord(event: any) {
    if (event && this.hasRecordingPermission) {
      if (this.isWeb) {
        this.startWebRecording();
      } else {
        this.startRecording();
      }
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

  startWebRecording() {
    this.isPlaying = true;
    this.isRecStarted = true;
    this.basictimer.start();
    this.audioRecordingService.startRecording();
  }

  startRecording() {
    // if (this.isWeb) {
    //   this.draw();
    // }
    VoiceRecorder.startRecording()
      .then((result: GenericResponse) => {
        if (result.value) {
          this.isPlaying = true;
          this.isRecStarted = true;
          this.basictimer.start();
        }
      })
      .catch((error: any) => {
        let errorObj = error.toString();
        this.toastService.showToast('success', errorObj);
        if (errorObj.includes('ALREADY_RECORDING')) {
          VoiceRecorder.stopRecording();
          this.startRecording();
        }
      });
  }

  pauseRecording() {
    if (this.isWeb) {
      this.isPlaying = false;
      this.basictimer.stop();
      this.audioRecordingService.pauseRecording();
    } else {
      VoiceRecorder.pauseRecording()
        .then((result: GenericResponse) => {
          if (result.value) {
            this.isPlaying = false;
            this.basictimer.stop();
          }
        })
        .catch((error) => console.log(error));
    }
  }

  resumeRecording() {
    if (this.isWeb) {
      this.isPlaying = true;
      this.basictimer.resume();
      this.audioRecordingService.resumeRecording();
    } else {
      VoiceRecorder.resumeRecording()
        .then((result: GenericResponse) => {
          if (result.value) {
            this.isPlaying = true;
            this.basictimer.resume();
          }
        })
        .catch((error) => console.log(error));
    }
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
    });
  }

  stopWebRecording() {
    this.basictimer.stop();
    this.audioRecordingService.stopRecording();

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.audioBlob = data.blob;
      this.audioBlobUrl = URL.createObjectURL(this.audioBlob);
      this.audioStopped.emit({ audio: this.audioBlobUrl, event: true });
      this.audioFileAction.emit(this.audioBlob);
      this.cdr.detectChanges();
    });
  }

  async recordedFileDuration(blobURL: any) {
    const blobUrl = blobURL;
    Utils.converToBlob(blobUrl.replace(/^[^,]+,/, '')).then((res: any) => {
      this.audioFileAction.emit(res);
    });
  }

  setRecordingEvents() {
    VoiceRecorder.canDeviceVoiceRecord().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => {
      console.log(result);
      if (result.value) {
        this.hasRecordingPermission = true;
        if (this.isWeb) {
          this.startWebRecording();
        } else {
          this.startRecording();
        }
      }
    });
    VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => {
      console.log(result);
      if (result.value) {
        this.hasRecordingPermission = true;
      }
    });
    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  get isWeb(): boolean {
    return !this.platform.is('hybrid');
  }

  onTimerComplete(event: any) {
    if (event) {
      if (this.isWeb) {
        this.stopWebRecording();
      } else {
        this.stopRecording();
      }
    }
  }

  abortAudioRecording() {
    this.audioRecordingService.abortRecording();
  }

  ngOnDestroy() {
    if (this.hasRecordingPermission && this.isRecStarted) {
      console.log('destroy');
      if (this.isWeb) {
        this.abortAudioRecording();
      }
      VoiceRecorder.stopRecording();
    }
  }
}
