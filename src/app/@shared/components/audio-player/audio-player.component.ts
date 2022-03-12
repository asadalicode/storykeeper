import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';
import MicrophonePlugin from 'wavesurfer.js/src/plugin/microphone';
import {
  VoiceRecorder,
  VoiceRecorderPlugin,
  RecordingData,
  GenericResponse,
  CurrentRecordingStatus,
} from 'capacitor-voice-recorder';
import { Utils } from '@app/@shared/appConstants';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  wave!: WaveSurfer;
  isPlaying = false;
  constructor(public waveService: WaveService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  startRecording() {
    VoiceRecorder.startRecording()
      .then((result: GenericResponse) => console.log(result.value))
      .catch((error) => console.log(error));
  }

  stopRecording() {
    VoiceRecorder.stopRecording().then((result: RecordingData) => {
      console.log(result.value);
      this.playRecordedSound(result);
    });
  }

  setRecordingEvents() {
    VoiceRecorder.canDeviceVoiceRecord().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value));
  }

  playRecordedSound(result: any) {
    const base64Sound = result.value.recordDataBase64; // from plugin
    const mimeType = result.value.mimeType; // from plugin
    const audioRef = new Audio(`${base64Sound}`); //For web
    // const audioRef = new Audio(`data:${mimeType};base64,${base64Sound}`); //For mobile
    // console.log(audioRef);
    audioRef.load();
    audioRef.oncanplaythrough = (e: any) => {
      this.wave.load(e.path[0].currentSrc);
      // Utils.dataUrlToFile(e.path[0].currentSrc, "abc.mp3").then((res:any)=> {
      //   console.log(res)

      // })
      audioRef.play();
    };
  }

  ngAfterViewInit(): void {
    this.wave = this.waveService.create({
      container: '#waveform',
      barWidth: 1000,
      barGap: 0,
      waveColor: '#242F40',
      progressColor: '#BF9C3F',
      barHeight: 10,
      backend: 'WebAudio',
      barRadius: 2,
      height: 10,
      normalize: true,
      partialRender: true,
      pixelRatio: 1,
      responsive: true,
    });
    this.wave.load('//www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3', [1, 1]);
    this.wave.stop();

    this.loadEvents();
  }

  loadEvents() {
    this.onReady();
    this.onPlay();
    this.onPause();
    this.onAudioProcessing();
    this.onFinish();
    this.onError();
  }

  onReady() {
    this.wave.on('ready', () => {
      console.log('ready');
    });
  }

  onPause() {
    this.wave.on('pause', () => {
      this.isPlaying = false;
    });
  }

  onPlay() {
    this.wave.on('play', () => {
      console.log('play');
      this.isPlaying = true;
    });
  }

  onAudioProcessing() {
    this.wave.on('audioprocess', function () {});
  }

  onFinish() {
    this.wave.on('finish', function () {
      console.log('finish');
    });
  }

  onError() {
    this.wave.on('error', function () {});
  }

  ngOnDestroy() {
    this.wave.destroy();
  }
}
