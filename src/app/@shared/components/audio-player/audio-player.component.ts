import { Platform } from '@ionic/angular';
import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';
import { Utils } from '@app/@shared/appConstants';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  wave!: WaveSurfer;
  isPlaying = false;
  isPlayable = false;
  elapsedTime: any = '00:00';
  remainingTime: any = '00:00';
  mp3Url: any;
  constructor(public waveService: WaveService, private cdr: ChangeDetectorRef, private platform: Platform) {}

  ngOnInit(): void {}

  @Input() set audioUrl(event: any) {
    this.mp3Url = event;
    console.log(this.mp3Url);
  }

  ngAfterViewInit(): void {
    this.wave = this.waveService.create({
      container: '#waveform',
      barWidth: 1000,
      barGap: 0,
      waveColor: this.isWeb ? '#ccc' : '#fff',
      progressColor: '#242F40',
      barHeight: 6,
      backend: 'WebAudio',
      barRadius: 4,
      height: 6,
      normalize: true,
      partialRender: true,
      pixelRatio: 1,
      responsive: true,
      cursorColor: 'transparent',
    });
    this.wave.load(this.mp3Url, [1, 1]);
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
      this.isPlayable = true;
      this.remainingTime = Utils.elapsedTimer(this.wave.getDuration());
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
    this.wave.on('audioprocess', () => {
      if (this.wave.isPlaying()) {
        this.elapsedTime = Utils.elapsedTimer(this.wave.getCurrentTime());
        this.remainingTime = Utils.elapsedTimer(this.wave.getDuration() - this.wave.getCurrentTime());
        this.cdr.detectChanges();
        this.cdr.checkNoChanges();
      }
    });
  }

  onFinish() {
    this.wave.on('finish', () => {
      this.wave.stop();
      this.isPlaying = false;
      this.cdr.detectChanges();
      this.cdr.checkNoChanges();
      console.log('finish');
    });
  }

  onError() {
    this.wave.on('error', function () {});
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  ngOnDestroy() {
    if (this.wave) {
      this.wave.destroy();
    }
  }
}
