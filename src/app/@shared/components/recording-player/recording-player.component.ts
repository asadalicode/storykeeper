import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform } from '@ionic/angular';
import getBlobDuration from 'get-blob-duration';

import {
  VoiceRecorder,
  VoiceRecorderPlugin,
  RecordingData,
  GenericResponse,
  CurrentRecordingStatus,
} from 'capacitor-voice-recorder';
import { Utils } from '@app/@shared/appConstants';

@Component({
  selector: 'app-recording-player',
  templateUrl: './recording-player.component.html',
  styleUrls: ['./recording-player.component.scss'],
})
export class RecordingPlayerComponent implements OnInit {
  isPlaying = false; //onditions for play pause buttons
  isPlayable = false; //when wave is ready and audio is loaded
  hasRecordingPermission = false; //permission granted by user device
  isRecStarted = false; //false when recording has not started yet
  isRecorded = false; // When audio is recoded and ready to be played
  @Output() audioFileAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() audioStopped: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef, private platform: Platform) {
    this.setRecordingEvents();
  }

  ngOnInit(): void {}

  @Input() set startRecord(event: any) {
    if (event) {
      this.startRecording();
    }
  }

  startRecording() {
    VoiceRecorder.startRecording()
      .then((result: GenericResponse) => {
        console.log(result.value);
        if (result.value) {
          this.isPlaying = true;
          this.isRecStarted = true;
        }
      })
      .catch((error) => console.log(error));
  }

  pauseRecording() {
    VoiceRecorder.pauseRecording()
      .then((result: GenericResponse) => {
        console.log('pause', result.value);
        if (result.value) {
          this.isPlaying = false;
        }
      })
      .catch((error) => console.log(error));
  }

  resumeRecording() {
    VoiceRecorder.resumeRecording()
      .then((result: GenericResponse) => {
        console.log('resume', result.value);
        if (result.value) {
          this.isPlaying = true;
        }
      })
      .catch((error) => console.log(error));
  }

  stopRecording() {
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
      console.log(res);
      this.audioFileAction.emit(res);
    });
    const duration = await getBlobDuration(blobUrl);
    console.log(duration + ' seconds');
  }

  setRecordingEvents() {
    VoiceRecorder.canDeviceVoiceRecord().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => {
      console.log(result.value);
      if (result.value) {
        this.hasRecordingPermission = true;
        this.startRecord(true);
      }
    });
    VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => {
      console.log(result.value);
      this.hasRecordingPermission = true;
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

  ngOnDestroy() {}
}
