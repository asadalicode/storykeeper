import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-on-social',
  templateUrl: './find-on-social.component.html',
  styleUrls: ['./find-on-social.component.scss'],
})
export class FindOnSocialComponent implements OnInit {
  @Input() ngClass = 'd-flex-row';
  constructor() {}

  ngOnInit(): void {}

  findBy(type: string) {
    switch (type) {
      case 'facebook':
        window.open('https://www.facebook.com/StoryKeeperApp', '_blank');
        break;

      case 'instagram':
        window.open('http://instagram.com/storykeeper/', '_blank');
        break;
    }
  }
}
