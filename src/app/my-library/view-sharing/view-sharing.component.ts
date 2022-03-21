import { ModalDismissRole } from '@app/@shared/constants';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ShareBookComponent } from '@app/book-shared/share-book/share-book.component';

@Component({
  selector: 'app-view-sharing',
  templateUrl: './view-sharing.component.html',
  styleUrls: ['./view-sharing.component.scss'],
})
export class ViewSharingComponent implements OnInit {
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    public modalController: ModalController
  ) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  async addListener() {
    const modal = await this.modalController.create({
      component: ShareBookComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Add Listener',
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
