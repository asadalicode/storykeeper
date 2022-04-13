import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { myLibraryTabs } from '@app/@shared/constants';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoDetail(id: any) {
    this.router.navigate(['tabs/my-books/book-detail/', id]);
  }

  bookStatus(status: number) {
    if (status == 3) {
      return 'pending';
    }
    if (status == 5) {
      return 'inprogress';
    }
    if ((status = 99)) {
      return 'finished';
    }
    return '';
  }
}
