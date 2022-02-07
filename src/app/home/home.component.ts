import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BuyNewBookComponent } from '@app/@shared/popup-components/buy-new-book/buy-new-book.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  isAuthor = false;

  constructor(
    private platform: Platform,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {
    this.isLoading = true;
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  async buyNewBook() {
    const modal = await this.modalController.create({
      component: BuyNewBookComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }
}
