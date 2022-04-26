import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: ` <img [class]="imgClass" [defaultImage]="defaultImage" [lazyLoad]="image" /> `,
})
export class ImageComponent {
  defaultImage = 'assets/images/bro.svg';
  @Input() image = '';
  @Input() imgClass = ''; //use case can be found in my-books-list.component.html

  ngOnInit() {}
}
