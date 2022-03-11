import { Component, OnInit } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';
import MicrophonePlugin from 'wavesurfer.js/src/plugin/microphone';
import {
  VoiceRecorder,
  VoiceRecorderPlugin,
  RecordingData,
  GenericResponse,
  CurrentRecordingStatus,
} from 'capacitor-voice-recorder';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  wave!: WaveSurfer;

  constructor(public waveService: WaveService) {}

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
          this.playSound(result);
        })

        .catch((error) => console.log(error));
    }, 19000);
  }

  playSound(result: any) {
    const base64Sound = result.value.recordDataBase64; // from plugin
    const mimeType = result.value.mimeType; // from plugin
    // const audioRef = new Audio(`${base64Sound}`)
    const audioRef = new Audio(`data:${mimeType};base64,${base64Sound}`);
    console.log(audioRef);
    audioRef.load();
    audioRef.oncanplaythrough = (e: any) => {
      console.log('@@@', e);
      audioRef.play();
    };
  }

  ngAfterViewInit(): void {
    this.wave = this.waveService.create({
      container: '#waveform',
      barWidth: 2,
      barGap: 2,
      waveColor: '#c54b4b',
      barHeight: 1,
      backend: 'WebAudio',
      barRadius: 2,
      height: 64,
      normalize: true,
      partialRender: true,
      pixelRatio: 1,
      responsive: true,
      interact: true,
      // mediaControls:true
      // cursorColor:'transparent',
      plugins: [
        MicrophonePlugin.create({}),
        // MicrophonePlugin.create({
        //   bufferSize: 4096,
        //   numberOfInputChannels: 1,
        //   numberOfOutputChannels: 1,
        //   constraints: {
        //   audio:true,
        //   video:false
        //   },

        // }),
      ],
    });
    this.wave.load('//www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3');

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

  ngOnDestroy() {
    this.wave.destroy();
  }
}
