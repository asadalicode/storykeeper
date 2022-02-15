import { Component, Input, OnInit } from '@angular/core';
import { Qusetion } from '@app/@shared/models/book';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input() question!: any;
  @Input() type!: any;
  constructor() {}

  ngOnInit(): void {}
}
