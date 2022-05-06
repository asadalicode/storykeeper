import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  constructor(private platform: Platform, private router: Router) {}

  ngOnInit(): void {}

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  goToLibrary() {
    this.router.navigate(['/my-libary'], { queryParams: { type: 'pending' } });
  }
}
