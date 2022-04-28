import { EditChapterComponent } from './../edit-chapter/edit-chapter.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { chapterStatus, ModalDismissRole } from '@app/@shared/constants';
import { ShareBookComponent } from '@app/book-shared/share-book/share-book.component';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Story } from '@app/@shared/models';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss'],
})
export class BookDetailPageComponent implements OnInit {
  bookStories: any = [];
  chapterStatus = chapterStatus;
  isLoading = false;
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.getBookStories();
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

  getBookStories() {
    this.isLoading = true;
    this.apiService.get(`/api/books/${this.routeParams.bookId}/Stories`, Story).subscribe({
      next: (res: any) => {
        this.bookStories = res;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
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

  async EditChapter(item: any) {
    console.log(item);
    const modal = await this.modalController.create({
      component: EditChapterComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Edit Chapter',
        bookId: item.bookId,
        storyId: item.id,
        storyDetails: item,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.getBookStories();
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
    this.router.navigate([`my-library/sharing/${this.routeParams.bookId}/${this.routeParams.bookTitle}`]);
  }

  async recordingScreen(story: any, type: string) {
    this.router.navigate(
      [`my-library/recording/${this.routeParams.bookId}/${story.id}/${this.routeParams.bookTitle}`],
      {
        queryParams: { type: type },
      }
    );
  }
  async editChapter() {
    this.router.navigate([`my-library/edit-chapter/${this.routeParams.bookId}/${this.routeParams.bookTitle}`]);
  }
}
