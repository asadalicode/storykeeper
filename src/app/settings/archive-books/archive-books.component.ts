import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BuyNewBookComponent } from '@app/@shared/popup-components/buy-new-book/buy-new-book.component';
import { ModalDismissRole, myLibraryTabs } from '@app/@shared/constants';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Book, BookImage, listAnimation, Profile } from '@app/@shared/models';
import { CredentialsService } from '@app/auth';
import { ShellComponent } from '@app/shell/shell.component';
import { SharedService } from '@app/@shared/sevices/shared.service';
import { ActivatedRoute } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-archive-books',
  templateUrl: './archive-books.component.html',
  styleUrls: ['./archive-books.component.scss'],
  animations: [listAnimation],
})
export class ArchiveBooksComponent implements OnInit {
  segments = [
    { name: 'All', value: 'all' },
    { name: 'Published', value: 'published' },
    { name: 'In Progress', value: 'inprogress' },
    { name: 'Pending', value: 'pending' },
    { name: 'Shared With me', value: 'shared' },
  ];
  segmentValue: string = 'all';
  isLoading = false;
  isAuthor = false;
  books!: Book[];
  userinfo!: Profile;
  @ViewChild(ShellComponent, { static: false }) shellComponent!: ShellComponent;
  constructor(
    private platform: Platform,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private credentials: CredentialsService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.isLoading = true;
    this.getArchivedBooks();
    this.getUserInfo();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
  get userId() {
    const user: any = this.credentials.credentials;
    return user.userId;
  }

  get routeParams() {
    let params: any;
    this.route.queryParams.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  async confirmArchiveBook(book: Book) {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Are you sure',
        subtitle: 'You want to unarchive this book?',
        confirmbuttonText: 'Yes',
        confirmbuttonClass: 'primary',
        cancelbuttonText: 'Cancel',
        imageUrl: 'assets/images/sorry.svg',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.toggleArchiveBook(book);
      }
    });
    return await modal.present();
  }

  //open side menu
  openMenu() {
    this.sharedService.triggerMsg(true);
  }

  getUserInfo() {
    this.apiService.getDetails(`/api/Users/${this.userId}`, Profile).subscribe((res: any) => {
      this.userinfo = res;
    });
  }

  toggleArchiveBook(book: Book) {
    this.apiService.post(`/api/Books/ToggleArchieve/${book.id}`, {}).subscribe({
      next: (res) => {
        this.toastService.showToast('success', 'Book unarchived successfully');
        this.getArchivedBooks();
      },
      error: (error) => {},
    });
  }

  getArchivedBooks() {
    this.isLoading = true;
    this.apiService.get(`/api/Books?isArchieved=true`, Book).subscribe(
      (res) => {
        this.books = [...res];
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
}
