import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ModalDismissRole } from '@app/@shared/constants';
import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AddNewQuestionComponent } from '../add-new-question/add-new-question.component';
import { Story } from '@app/@shared/models/bookQuestion';

@Component({
  selector: 'app-book-chapters',
  templateUrl: './book-chapters.component.html',
  styleUrls: ['./book-chapters.component.scss'],
})
export class BookChaptersComponent implements OnInit {
  @Input() showSaveButton = false;
  @Input() routeParams: any;
  @Output() save = new EventEmitter<any>();

  addedQuestionList: Story[] = [];
  List = [
    // {
    //   type: 'Added Questions',
    //   questions: [
    //     {
    //       id: 1,
    //       thumbnail: '',
    //       question: 'What is your favorite game',
    //       description: 'string',
    //     },
    //     {
    //       id: 2,
    //       thumbnail: '',
    //       question: 'What is your favorite pet',
    //       description: 'string',
    //     },
    //     {
    //       id: 3,
    //       thumbnail: '',
    //       question: 'What is your favorite subject',
    //       description: 'string',
    //     },
    //   ],
    // },
    {
      type: 'Family Questions',
      questions: [
        {
          id: 4,
          thumbnail: '',
          question: 'What is your favorite hobby',
          description: 'string',
        },
        {
          id: 5,
          thumbnail: '',
          question: 'What is your favorite game',
          description: 'string',
        },
        {
          id: 6,
          thumbnail: '',
          question: 'What is your favorite game',
          description: 'string',
        },
      ],
    },
  ];

  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit(): void {
    this.getAddedQuestions();
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getAddedQuestions() {
    this.apiService.get(`/api/books/${this.routeParams.bookId}/Stories`, Story).subscribe((res) => {
      console.log(res);
      this.addedQuestionList = res;
    });
  }

  removeQuestion(event: any) {}

  async newQustion() {
    const modal = await this.modalController.create({
      component: AddNewQuestionComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'New Question',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.getAddedQuestions();
      }
    });
    return await modal.present();
  }

  onSave() {
    this.save.emit(3);
  }
}
