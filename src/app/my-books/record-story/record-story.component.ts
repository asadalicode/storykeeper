import { ConfirmationInfoComponent } from './../../@shared/popup-components/confirmation-info/confirmation-info.component';
import { ModalDismissRole } from '@app/@shared/constants';
import { Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ImageCredientials, Story, StoryFile } from '@app/@shared/models';
import { Utils } from '@app/@shared';

@Component({
  selector: 'app-record-story',
  templateUrl: './record-story.component.html',
  styleUrls: ['./record-story.component.scss'],
})
export class RecordStoryComponent implements OnInit {
  isRecording: boolean = false;
  story!: Story;
  uploadCredentials: any;
  uploadFileObj: any;
  isRecorded = false;
  isAudioAvailable = false; //check if audio is already recorded and availble for this story
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getStory();
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

  getAudioFile(event: Blob) {
    this.getFileCredentials(event);
  }

  get fileFileObject() {
    return {
      key: this.uploadFileObj.key,
      acl: this.uploadFileObj.acl,
      success_action_status: this.uploadFileObj.success_action_status,
      policy: this.uploadFileObj.policy,
      'x-amz-algorithm': this.uploadFileObj.x_amz_algorithm,
      'x-amz-credential': this.uploadFileObj.x_amz_credential,
      'x-amz-date': this.uploadFileObj.x_amz_date,
      'x-amz-signature': this.uploadFileObj.x_amz_signature,
      'x-amz-meta-owner': this.uploadFileObj.x_amz_meta_owner,
      // is_version: this.uploadFileObj.is_version,
      file: this.uploadFileObj.file,
    };
  }

  getFileCredentials(file: any) {
    const uuid = Utils.UUID + '.mp3';
    this.apiService
      .getDetails(
        `/api/Files/credentials/book/${this.routeParams.bookId}/story/${this.routeParams.storyId}?fileName=${uuid}`,
        ImageCredientials
      )
      .subscribe({
        complete: () => {},
        next: (res: any) => {
          this.uploadCredentials = res;
          this.story.answer = uuid;
          this.uploadFileObj = {
            ...this.uploadCredentials,
            file: file,
          };
        },
        error: (err: any) => {},
      });
  }

  stopRecording(event: any) {
    if (event.event) {
      this.story.answer = event.audio;
      console.log(event);
      this.isRecorded = true;
      this.isRecording = false;
    }
  }

  startRecording(event: any) {
    if (event) {
      this.isRecording = true;
    }
  }

  postFile(event?: any) {
    if (this.uploadCredentials) {
      this.apiService.postFormData(this.uploadCredentials.upload_url, this.fileFileObject).subscribe({
        complete: () => {},
        next: (res: any) => {},
        error: (err: any) => {
          if (err.status == 201) {
            this.updateStoryOnUpload();
          }
        },
      });
    }
  }
  getStory() {
    this.apiService
      .getDetails(`/api/books/${this.routeParams.bookId}/Stories/${this.routeParams.storyId}`, Story)
      .subscribe((res: any) => {
        this.story = res;
        if (this.story.answer) {
          this.getServerFileUrl();
        }
      });
  }

  getServerFileUrl() {
    this.apiService
      .getDetails(
        `/api/Files/book/${this.routeParams.bookId}/story/${this.routeParams.storyId}?fileName=${this.story.answer}`,
        StoryFile
      )
      .subscribe({
        next: (res: any) => {
          if (res.url) {
            this.story.answer = res.url;
            this.isRecorded = true;
            this.isRecording = false;
            this.isAudioAvailable = true;
          }
        },
        error: (error: any) => {},
      });
  }

  updateStoryOnUpload() {
    let fileUploadObj = {
      fileName: this.story.answer,
    };
    this.apiService
      .put(`/api/books/${this.routeParams.bookId}/Stories/${this.routeParams.storyId}/AddAnswer`, fileUploadObj)
      .subscribe({
        next: (res) => {},
        error: (error) => {},
      });
  }

  async sendStory() {
    this.postFile();
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
        this.isRecording = true;
        this.isRecorded = false;
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
      if (data.role == ModalDismissRole.submitted) {
        console.log('popup submitted');
      }
      if (data.role == ModalDismissRole.canceled) {
        console.log('popup closed');
      }
    });
    return await modal.present();
  }
}
