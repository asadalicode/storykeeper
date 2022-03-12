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

  ngOnInit(): void {
    VoiceRecorder.canDeviceVoiceRecord().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.startRecording()
      .then((result: GenericResponse) => console.log(result.value))
      .catch((error) => console.log(error));

    setTimeout(() => {
      VoiceRecorder.stopRecording()
        .then((result: RecordingData) => {
          console.log(result.value);
          // this.playSound(result);
        })

        .catch((error) => console.log(error));
    }, 4000);
  }

  playSound(result: any) {
    const base64Sound = result.value.recordDataBase64; // from plugin
    const mimeType = result.value.mimeType; // from plugin
    const audioRef = new Audio(`${base64Sound}`);
    // const audioRef = new Audio(`data:${mimeType};base64,${base64Sound}`);
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
      // interact: true,
      // mediaControls:true
      // cursorColor:'transparent',
      // plugins: [
      //   MicrophonePlugin.create({}),
      //   MicrophonePlugin.create({
      //     bufferSize: 4096,
      //     numberOfInputChannels: 1,
      //     numberOfOutputChannels: 1,
      //     constraints: {
      //     audio:true,
      //     video:false
      //     },

      //   }),
      // ],
    });
    this.wave.load('//www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3', [1, 1]);
    this.wave.stop();

    this.loadEvents();

    // var mediaRecorder: any;
    // const audioChunks: any = [];
    // let $this = this;
    // setTimeout(() => {
    //   this.wave.microphone.on('deviceReady', function (stream: any) {
    //     console.log('Device ready!');
    //     mediaRecorder = new MediaRecorder(stream);
    //     mediaRecorder.start();
    //     mediaRecorder.addEventListener('dataavailable', (event: any) => {
    //       audioChunks.push(event.data);
    //     });

    //     setTimeout(() => {
    //       $this.wave.microphone.stop();
    //       mediaRecorder.stop();
    //     }, 10000);

    //     mediaRecorder.addEventListener('stop', () => {
    //       const audioBlob = new Blob(audioChunks);
    //       const audioUrl = URL.createObjectURL(audioBlob);
    //       const audio = new Audio(audioUrl);
    //       console.log(audio);
    //       audio.play();
    //     });
    //   });

    //   this.wave.microphone.on('deviceError', function (code) {
    //     console.warn('Device error: ' + code);
    //   });

    //   // start the microphone
    //   this.wave.microphone.start();
    // }, 4000);
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
