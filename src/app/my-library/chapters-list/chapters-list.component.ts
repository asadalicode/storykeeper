import { ModalDismissRole } from '@app/@shared/constants';
import { IonRouterOutlet, ModalController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AddNewQuestionComponent } from '@app/book-shared/add-new-question/add-new-question.component';
@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.scss'],
})
export class ChaptersListComponent implements OnInit {
  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit(): void {}

  get isWeb(): boolean {
    return !this.platform.is('cordova');
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
}
