import { ModalDismissRole, myLibraryTabs } from './../../@shared/constants';
import { RequestPopupComponent } from './../../book-shared/request-popup/request-popup.component';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';
import { ApiService } from '@app/@shared/sevices/api.service';
import { BookDetail } from '@app/@shared/models';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-my-books-list',
  templateUrl: './my-books-list.component.html',
  styleUrls: ['./my-books-list.component.scss'],
})
export class MyBooksListComponent implements OnInit {
  books: any = [];
  isLoading = false;
  myLibraryTabs = myLibraryTabs;
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private apiService: ApiService,
    private toastService: ToastService
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

  acceptRequest(bookId: any) {
    this.apiService.put(`/api/Books/Accept/${bookId}`, {}).subscribe({
      next: (res) => {
        this.toastService.showToast('success', 'Book accepted successfully');
        this.getRecipientBooks();
      },
      error: (error) => {},
    });
  }

  async openRequestPopup(book: any) {
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
        this.acceptRequest(book.id);
      }
      if (data.role == ModalDismissRole.canceled) {
        console.log('Cancelled');
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
    modal.onDidDismiss().then((data) => {
      console.log(data);
    });
    return await modal.present();
  }
}
