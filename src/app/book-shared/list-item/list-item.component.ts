import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

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
    this.router.navigate(['tabs/my-books/book-detail/1']);
  }
}
