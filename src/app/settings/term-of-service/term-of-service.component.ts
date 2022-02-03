import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term-of-service',
  templateUrl: './term-of-service.component.html',
  styleUrls: ['./term-of-service.component.scss'],
})
export class TermOfServiceComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
}
