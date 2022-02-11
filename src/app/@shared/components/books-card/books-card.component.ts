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
    this.router.navigate([`tabs/my-library/update-book/${book.id}/${book.title}`]);
  }
}
