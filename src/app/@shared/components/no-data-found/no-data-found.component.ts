import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-found',
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss'],
})
export class NoDataFoundComponent implements OnInit {
  @Input() message = 'No data Found!';
  constructor() {}

  ngOnInit(): void {}
}
