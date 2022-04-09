import { EditChapterComponent } from './../edit-chapter/edit-chapter.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ModalDismissRole } from '@app/@shared/constants';
import { ShareBookComponent } from '@app/book-shared/share-book/share-book.component';

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
    private route: ActivatedRoute,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {}
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
  async EditBook() {
    const modal = await this.modalController.create({
      component: EditBookComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Edit Book',
        bookId: this.routeParams.bookId,
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

  async EditChapter() {
    const modal = await this.modalController.create({
      component: EditChapterComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Edit Chapter',
        bookId: this.routeParams.bookId,
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

  async shareBook() {
    const modal = await this.modalController.create({
      component: ShareBookComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Share Book',
        bookId: this.routeParams.bookId,
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
    this.router.navigate([`tabs/my-library/sharing/${this.routeParams.bookId}`]);
  }

  async recordingScreen(type: string) {
    this.router.navigate(['tabs/my-library/recording/1/1'], { queryParams: { type: type } });
  }
  async editChapter() {
    this.router.navigate([`tabs/my-library/edit-chapter/${this.routeParams.bookId}`]);
  }
}
