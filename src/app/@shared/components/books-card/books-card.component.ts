import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '@app/@shared/models/book';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss'],
})
export class BooksCardComponent implements OnInit {
  @Input() book!: Book;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  updateBook(book: Book) {
    if (book.status == 1) {
      this.router.navigate([`tabs/my-library/update-book/${book.id}/${book.title}`]);
    } else if (book.status == 2) {
      this.router.navigate([`tabs/my-library/book/${book.id}/${book.title}`]);
    }
  }
}
