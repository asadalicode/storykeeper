import { ModalDismissRole, myLibraryTabs } from './../../@shared/constants';
import { RequestPopupComponent } from './../../book-shared/request-popup/request-popup.component';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';
import { ApiService } from '@app/@shared/sevices/api.service';
import { BookDetail } from '@app/@shared/models';

@Component({
  selector: 'app-my-books-list',
  templateUrl: './my-books-list.component.html',
  styleUrls: ['./my-books-list.component.scss'],
})
export class MyBooksListComponent implements OnInit {
  books: any = [];
  isLoading = false;
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getRecipientBooks();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getRecipientBooks() {
    this.isLoading = true;
    this.apiService.get(`/api/Books/AsRecipient`, BookDetail).subscribe({
      next: (res: BookDetail[]) => {
        this.books = res;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
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
