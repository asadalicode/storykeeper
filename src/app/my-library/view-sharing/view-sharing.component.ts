import { ApiService } from './../../@shared/sevices/api.service';
import { ConfirmationMessages, ModalDismissRole } from '@app/@shared/constants';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ShareBookComponent } from '@app/book-shared/share-book/share-book.component';
import { ActivatedRoute } from '@angular/router';
import { BookShare } from '@app/@shared/models';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-view-sharing',
  templateUrl: './view-sharing.component.html',
  styleUrls: ['./view-sharing.component.scss'],
})
export class ViewSharingComponent implements OnInit {
  sharedPeople: any = [];
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastService: ToastService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getListeners();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
  get routeParams() {
    let params: any;
    this.route.params.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  async deleteListener(event: any) {
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
        this.apiService.delete(`/api/Books/DeleteBookshare/${event.id}`).subscribe((res) => {
          this.getListeners();
          this.toastService.showToast('success', 'Listener deleted successfully');
        });
      }
    });
    return await modal.present();
  }

  getListeners() {
    this.apiService.get(`/api/Books/${this.routeParams.bookId}/shares`, BookShare).subscribe((res) => {
      console.log(res);
      this.sharedPeople = res;
    });
  }

  async addListener() {
    const modal = await this.modalController.create({
      component: ShareBookComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Add Listener',
        bookId: this.routeParams.bookId,
        bookTitle: this.routeParams.bookTitle,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.getListeners();
      }
    });
    return await modal.present();
  }
}
