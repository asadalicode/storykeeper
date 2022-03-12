import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audio-recording',
  templateUrl: './audio-recording.component.html',
  styleUrls: ['./audio-recording.component.scss'],
})
export class AudioRecordingComponent implements OnInit {
  date = '1/1/2020';
  status = 'published';
  constructor(private platform: Platform, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.recordingStatus();
  }

  recordingStatus(): void {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.status = res.type;
    });
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
}
