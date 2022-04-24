import { ConfirmationInfoComponent } from './../@shared/popup-components/confirmation-info/confirmation-info.component';
import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BuyNewBookComponent } from '@app/@shared/popup-components/buy-new-book/buy-new-book.component';
import { ModalDismissRole, myLibraryTabs } from '@app/@shared/constants';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Book, BookImage } from '@app/@shared/models';

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
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.getBooks();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getSharedBooks() {
    this.isLoading = true;
    this.apiService.get('/api/Books/Shared', Book).subscribe((res) => {
      this.books = [...res];
      if (this.books.length) {
        this.getBookImages();
      } else {
        this.isLoading = false;
      }
      this.isAuthor = this.books.length > 0 ? true : false;
    });
  }

  getBooks(status: number = 0) {
    this.isLoading = true;
    this.apiService.get('/api/Books', Book).subscribe(
      (res) => {
        if (status == 0) {
          this.books = [...res];
        } else {
          this.books = res.filter((e: Book) => {
            return e.status == status;
          });
          this.books = [...this.books];
        }
        if (this.books.length) {
          this.getBookImages();
        } else {
          this.isLoading = false;
        }

        this.isAuthor = this.books.length > 0 ? true : false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  getBookImages() {
    const bookImagesArr = this.books.map((item) => BookImage.adapt(item));
    this.apiService.post('/api/Files/books/images', bookImagesArr).subscribe({
      next: (res: any = []) => {
        this.books.forEach((element) => {
          res.forEach((elem: any) => {
            if (element.id == elem.bookId) {
              element.image = elem.url;
            }
          });
        });
        this.isLoading = false;
      },
      error: (error: any) => {},
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
    if (myLibraryTabs[event.detail.value] == '4') {
      this.getSharedBooks();
    } else this.getBooks(myLibraryTabs[event.detail.value]);
  }
}
