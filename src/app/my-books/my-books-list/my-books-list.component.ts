import { ModalDismissRole } from './../../@shared/constants';
import { RequestPopupComponent } from './../../book-shared/request-popup/request-popup.component';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';

@Component({
  selector: 'app-my-books-list',
  templateUrl: './my-books-list.component.html',
  styleUrls: ['./my-books-list.component.scss'],
})
export class MyBooksListComponent implements OnInit {
  mybooks = [
    {
      id: 1,
      title: 'Book about Cat',
      status: 'finished',
      year: '2021',
      author: 'John',
    },
    {
      id: 2,
      title: 'Book about Dog',
      status: 'inprogress',
      year: '2021',
      author: 'Lena Horushenko',
    },
  ];

  bookForApproval = [
    {
      id: 1,
      title: 'Book about Cat',
      status: 'pending',
      year: '2021',
      author: 'John',
    },
    {
      id: 2,
      title: 'Book about Dog',
      status: 'pending',
      year: '2021',
      author: 'Lena Horushenko',
    },
  ];

  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  async openRequestPopup() {
    const modal = await this.modalController.create({
      component: RequestPopupComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Request for New Book',
        subtitle: 'New Story for Book',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        // debugger;
      }
      if (data.role == ModalDismissRole.canceled) {
        this.cancelRequest();
      }
    });
    return await modal.present();
  }

  async cancelRequest() {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'You canceled the request',
        confirmbuttonText: 'Back to Request',
        imageUrl: 'assets/images/sorry.svg',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {});
    return await modal.present();
  }
}
