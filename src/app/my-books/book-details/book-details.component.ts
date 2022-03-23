import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  constructor(private platform: Platform, private router: Router) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  gotoRecording() {
    this.router.navigate(['tabs/my-books/record-story/1']);
  }
}
