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
}
