import { ApiService } from './../../@shared/sevices/api.service';
import { ModalDismissRole } from '@app/@shared/constants';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ShareBookComponent } from '@app/book-shared/share-book/share-book.component';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@app/@shared/models';

@Component({
  selector: 'app-view-sharing',
  templateUrl: './view-sharing.component.html',
  styleUrls: ['./view-sharing.component.scss'],
})
export class ViewSharingComponent implements OnInit {
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    private apiService: ApiService,
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

  getListeners() {
    this.apiService.get(`/api/Books/${this.routeParams.bookId}/shares`, Book).subscribe((res) => {
      console.log(res);
    });
  }

  async addListener() {
    const modal = await this.modalController.create({
      component: ShareBookComponent,
      cssClass: 'modal-popup md',
      componentProps: {
        title: 'Add Listener',
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
}
