import { Component, Input } from '@angular/core';

@Component({
  selector: 'image',
  template: ` <img [defaultImage]="defaultImage" [lazyLoad]="image" /> `,
})
export class ImageComponent {
  defaultImage = 'assets/images/bro.svg';
  @Input() image = '';
  ngOnInit() {}
}
