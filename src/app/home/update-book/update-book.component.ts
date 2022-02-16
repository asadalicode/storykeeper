import { Qusetion } from './../../@shared/models/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { AddNewQuestionComponent } from '../add-new-question/add-new-question.component';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';
import { ModalDismissRole } from '@app/@shared/constants';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent implements OnInit {
  step1Form!: FormGroup;
  isLoading = false;
  step = 1;

  List = [
    {
      type: 'Added Questions',
      questions: [
        {
          id: 1,
          thumbnail: '',
          question: 'What is your favorite game',
          description: 'string',
        },
        {
          id: 2,
          thumbnail: '',
          question: 'What is your favorite pet',
          description: 'string',
        },
        {
          id: 3,
          thumbnail: '',
          question: 'What is your favorite subject',
          description: 'string',
        },
      ],
    },
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

  list: any;
  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm() {
    this.step1Form = this.formBuilder.group({
      bookTitle: ['dsfd', [Validators.required]],
      recipientsName: ['sdfds', [Validators.required]],
      recipientsEmail: ['sdf', [Validators.required]],
    });
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  saveStep1() {
    this.step = 2;
  }

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
        debugger;
      }
    });
    return await modal.present();
  }

  async newBookAvailable() {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup sm',
      componentProps: {
        title: 'New book available',
        imageUrl: 'assets/images/about-ion.png',
        confirmbuttonText: 'Ok',
        confirmbuttonClass: 'primary',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  removeQuestion(index: any) {}
  save() {
    this.router.navigate(['/tabs/my-library']);
    this.newBookAvailable();
  }
}
