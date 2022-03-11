import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sharing',
  templateUrl: './view-sharing.component.html',
  styleUrls: ['./view-sharing.component.scss'],
})
export class ViewSharingComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
}
