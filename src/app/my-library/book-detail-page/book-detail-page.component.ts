import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ModalDismissRole } from '@app/@shared/constants';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss'],
})
export class BookDetailPageComponent implements OnInit {
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  async EditBook() {
    const modal = await this.modalController.create({
      component: EditBookComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Edit Book',
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

  async ViewSharing() {
    this.router.navigate([`tabs/my-library/sharing/1`]);
  }

  async play() {
    this.router.navigate(['tabs/my-library/recording/1/1']);
  }
}
