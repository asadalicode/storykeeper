import { Platform } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() backPageUrl!: string;

  constructor(private platform: Platform, private _location: Location) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
  goBack() {
    this._location.back();
  }
}
