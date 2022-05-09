import { Platform } from '@ionic/angular';
import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';
import { Utils } from '@app/@shared/appConstants';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  isLoading = false;
  wave!: WaveSurfer;
  isPlaying = false;
  isPlayable = false;
  elapsedTime: any = '00:00';
  remainingTime: any = '00:00';
  mp3Url: any;
  uuid: string;
  constructor(
    public waveService: WaveService,
    private toastService: ToastService,
    private cdr: ChangeDetectorRef,
    private platform: Platform
  ) {
    this.uuid = Utils.generateUUID();
  }

  ngOnInit(): void {
    this.isLoading = true;
  }

  @Input() set audioUrl(event: any) {
    this.mp3Url = event;
  }

  ngAfterViewInit(): void {
    this.wave = this.waveService.create({
      container: `#${this.uuid}`,
      barWidth: 3,
      barGap: 1,
      waveColor: this.isWeb ? '#ccc' : '#fff',
      progressColor: '#242F40',
      // removeMediaElementOnDestroy: true,
      barHeight: 20,
      backend: 'WebAudio',
      barRadius: 4,
      height: 20,
      normalize: false,
      partialRender: false,
      pixelRatio: 5,
      responsive: true,
      cursorColor: 'transparent',
    });

    this.wave.load(this.mp3Url);
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
      this.isLoading = false;
      this.wave.seekTo(0);
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
    this.wave.on('error', () => {
      this.toastService.showToast('error', 'Server side error occurred, Please contact administrator!');
      this.isLoading = false;
    });
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
