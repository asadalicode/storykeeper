import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  isAuthor = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.isLoading = true;
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
}
