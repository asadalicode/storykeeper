import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { myLibraryTabs } from '@app/@shared/constants';
import { SharedService } from '@app/@shared/sevices/shared.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item: any;
  errorImg = 'assets/images/bro.svg';
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {}

  gotoDetail(id: any) {
    this.sharedService.setImgInStorage(this.item.image);
    this.router.navigate(['my-books/book-detail/', id, this.item.title]);
  }

  onImgError(event: any) {
    event.target.src = 'assets/images/bro.svg';
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
