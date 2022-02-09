import { ConfirmationInfoComponent } from './../@shared/popup-components/confirmation-info/confirmation-info.component';
import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BuyNewBookComponent } from '@app/@shared/popup-components/buy-new-book/buy-new-book.component';
import { ModalDismissRole } from '@app/@shared/constants';
import { HttpService } from '@app/@shared/sevices/http-secvices.service';
import { Book } from '@app/@shared/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  isAuthor = false;
  books!: Book[];

  constructor(
    private platform: Platform,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.getBooks();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getBooks(type: string = 'shared') {
    this.httpService.getBooks().subscribe((res) => {
      if (type == 'all') {
        this.books = res;
      } else {
        this.books = res.filter((e: Book) => {
          return e.status === type;
        });
      }

      this.isAuthor = this.books.length > 0 ? true : false;
    });
  }

  async buyNewBook() {
    const modal = await this.modalController.create({
      component: BuyNewBookComponent,
      cssClass: 'modal-popup sm',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.newBookAvailable();
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

  segmentChanged(event: any) {
    this.getBooks(event.detail.value);
  }
}
