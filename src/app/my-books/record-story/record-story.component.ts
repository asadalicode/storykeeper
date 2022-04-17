import { ConfirmationInfoComponent } from './../../@shared/popup-components/confirmation-info/confirmation-info.component';
import { ModalDismissRole } from '@app/@shared/constants';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record-story',
  templateUrl: './record-story.component.html',
  styleUrls: ['./record-story.component.scss'],
})
export class RecordStoryComponent implements OnInit {
  isRecording: boolean = false;
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private route: ActivatedRoute
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

  async sendStory() {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup md ',
      componentProps: {
        title: 'Story had sent',
        subtitle: 'The author will receive your audio story shortly',
        confirmbuttonText: 'Back to Request',
        confirmbuttonClass: 'primary',
        imageUrl: 'assets/images/sendstory.svg',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        // debugger;
      }
      if (data.role == ModalDismissRole.canceled) {
        // this.cancelRequest();
      }
    });
    return await modal.present();
  }

  async reRecordStory() {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup md ',
      componentProps: {
        title: 'Delete and Rerecord',
        subtitle: 'Are you sure you want to delete?',
        confirmbuttonText: 'Confirm',
        confirmbuttonClass: 'primary',
        cancelbuttonText: 'cancel',
        cancelbuttonClass: 'secondary',
        imageUrl: 'assets/images/sorry.svg',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.deleted();
      }
      if (data.role == ModalDismissRole.canceled) {
        // this.cancelRequest();
      }
    });
    return await modal.present();
  }

  async deleted() {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup md ',
      componentProps: {
        title: 'Yout recording was delete',
        confirmbuttonText: 'Back To Request',
        confirmbuttonClass: 'primary',
        imageUrl: 'assets/images/sorry.svg',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.canceled) {
        console.log('popup closed');
      }
    });
    return await modal.present();
  }
}
