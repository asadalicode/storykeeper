import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-recording',
  templateUrl: './audio-recording.component.html',
  styleUrls: ['./audio-recording.component.scss'],
})
export class AudioRecordingComponent implements OnInit {
  date = '1/1/2020';
  status = 'inprogress';
  constructor(private platform: Platform) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
}
