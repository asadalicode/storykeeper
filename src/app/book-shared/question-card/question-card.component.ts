import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Story } from '@app/@shared/models/bookQuestion';
@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input() question!: Story;
  @Input() type!: any;
  @Output() delete = new EventEmitter<any>();
  @Output() add = new EventEmitter<any>();
  constructor() {}

  onDelete(question: any) {
    this.delete.emit(question);
  }

  onAdd(question: any) {
    this.add.emit(question);
  }
  ngOnInit(): void {}
}
