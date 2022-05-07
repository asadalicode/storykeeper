import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '@app/@shared/models/book';
import { SharedService } from '@app/@shared/sevices/shared.service';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss'],
})
export class BooksCardComponent implements OnInit {
  @Input() book!: Book;
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {}

  updateBook(book: Book) {
    this.sharedService.setImgInStorage(book.image);
    if (book.status == 1) {
      // pending
      this.router.navigate([`my-library/update-book/${book.id}/${book.title}`]);
    } else if (book.status == 3 || book.status == 5) {
      // inprogress
      this.router.navigate([`my-library/book/${book.id}/${book.title}`]);
    }
  }
}
