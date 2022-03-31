import { ApiService } from '@app/@shared/sevices/api.service';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';
import { ModalDismissRole } from '@app/@shared/constants';
import { Question } from '@app/@shared/models';
import { Story } from '@app/@shared/models/bookQuestion';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.scss'],
})
export class AddNewQuestionComponent implements OnInit {
  questionForm!: FormGroup;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  private createForm() {
    this.questionForm = this.formBuilder.group({
      question: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  dismiss(value = false) {
    this.modalController.dismiss('button clicked');
  }

  save() {
    console.log(this.questionForm.value);
    let quest: Question = {
      question: this.questionForm.value.question,
      id: Math.random(),
      thumbnail: '',
      type: 'Added Questions',
      description: 'New Question added',
    };

    let story: Story = {
      question: this.questionForm.value.question,
      description: this.questionForm.value.description,
    };

    this.apiService.post(`/api/books/5/Stories`, story).subscribe((res) => {
      this.modalController.dismiss(story, ModalDismissRole.submitted);
    });
  }
}
