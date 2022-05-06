import { forkJoin, map } from 'rxjs';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ConfirmationMessages, ModalDismissRole } from '@app/@shared/constants';
import { Platform, IonRouterOutlet, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AddNewQuestionComponent } from '../add-new-question/add-new-question.component';
import { Story } from '@app/@shared/models/bookQuestion';
import { Category, listAnimation, TemplateQuestion } from '@app/@shared/models';
import * as _ from 'lodash';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-book-chapters',
  templateUrl: './book-chapters.component.html',
  styleUrls: ['./book-chapters.component.scss'],
  animations: [listAnimation],
})
export class BookChaptersComponent implements OnInit {
  @Input() showSaveButton = false;
  @Input() routeParams: any;
  @Output() save = new EventEmitter<any>();

  addedQuestionList: Story[] = [];
  categoryQuestions: Category[] = [];
  categoryTemplateQuestions: any;

  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private apiService: ApiService,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private routerOutlet: IonRouterOutlet,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getAddedQuestions();
    this.getCategoryQuestions();
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

  getCategoryQuestions() {
    this.apiService.get('/api/Categories', Category).subscribe((res: any) => {
      this.categoryQuestions = res;
      this.getGroupedCategories();
    });
  }

  getGroupedCategories() {
    forkJoin(
      this.categoryQuestions.map((categ: any) =>
        // console.log(p),
        this.apiService.get(`/api/Categories/${categ.id}/TemplateQuestions`, TemplateQuestion).pipe(
          // map each Location to a cloned provider object
          map((response) =>
            response.map((item: any) => {
              return {
                ...categ,
                templateQuestions: item,
              };
            })
          )
        )
      )
    ).subscribe((p: any) => {
      let result: any = [];
      p.forEach((element: any, index: any) => {
        element.forEach((el: any) => {
          result.push(el);
        });
      });
      this.categoryTemplateQuestions = _(result)
        .groupBy((meeting) => meeting.caregoryName)
        .map((questions, caregoryName) => ({ caregoryName, questions }))
        .value();
      console.log(this.categoryTemplateQuestions);
    });
  }

  async removeQuestion(event: any) {
    console.log('delete emitted', event);
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: ConfirmationMessages.DeletePopupLabel,
        subtitle: ConfirmationMessages.DeletePopupConfirmationMessage,
        confirmbuttonText: 'Delete',
        confirmbuttonClass: 'danger',
        cancelbuttonText: 'Cancel',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.apiService.delete(`/api/books/${this.routeParams.bookId}/Stories/${event.id}`).subscribe((res) => {
          this.getAddedQuestions();
          this.toastService.showToast('success', 'Question deleted successfully.');
        });
      }
    });
    return await modal.present();
  }

  async newQustion() {
    const modal = await this.modalController.create({
      component: AddNewQuestionComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'New Question',
        bookId: this.routeParams.bookId,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.getAddedQuestions();
        this.toastService.showToast('success', 'Question added successfully.');
      }
    });
    return await modal.present();
  }

  addTemplateQuestion(question: any) {
    let story: Story = {
      question: question.question,
      description: question.description,
    };

    this.apiService.post(`/api/books/${this.routeParams.bookId}/Stories`, story).subscribe((res) => {
      this.getAddedQuestions();
      this.toastService.showToast('success', 'Question added successfully.');
    });
  }
  onSave() {
    this.save.emit(3);
  }
}
