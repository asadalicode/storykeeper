import { ConfirmationInfoComponent } from './../../@shared/popup-components/confirmation-info/confirmation-info.component';
import { ModalDismissRole } from '@app/@shared/constants';
import { Platform, ModalController, IonRouterOutlet, ViewWillEnter, LoadingController } from '@ionic/angular';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ImageCredientials, Story, StoryFile } from '@app/@shared/models';
import { Utils } from '@app/@shared';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
import { Location } from '@angular/common';
import { SharedService } from '@app/@shared/sevices/shared.service';

@Component({
  selector: 'app-record-story',
  templateUrl: './record-story.component.html',
  styleUrls: ['./record-story.component.scss'],
})
export class RecordStoryComponent implements OnInit, OnDestroy {
  isRecording = false;
  story!: Story;
  uploadCredentials: any;
  uploadFileObj: any;
  isRecorded = false;
  isLoading = true;
  isAudioAvailable = false; //check if audio is already recorded and availble for this story
  isProcessing = false;
  file!: File;
  loadingOverlay: any;
  // destroyRecorder=false;
  constructor(
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private chooser: Chooser,
    private _location: Location,
    private sharedService: SharedService,
    private loadingController: LoadingController,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getStory();
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get bookImg(): string {
    return this.sharedService.getImgInStorage();
  }

  goBack() {
    this._location.back();
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
      this.isRecorded = true;
      this.isRecording = false;
    }
  }

  getAudioFromSystem(event: any): any {
    if (!event.target.files.length) {
      return 0;
    }
    this.file = event.target.files[0];
    let audio: any = URL.createObjectURL(this.file);
    Utils.getBase64(this.file).then((res: any) => {
      Utils.converToBlob(res.replace(/^[^,]+,/, '')).then((res) => {
        this.getAudioFile(res);
      });
    });

    this.story.answer = audio;
    this.isRecorded = true;
    this.isRecording = false;
  }

  getAudioFromStorage() {
    this.chooser.getFile('audio/*').then(
      (res: any) => {
        if (res) {
          Utils.converToBlob(res.dataURI.replace(/^[^,]+,/, '')).then((res) => {
            this.getAudioFile(res);
            let audio: any = URL.createObjectURL(res);
            this.story.answer = audio;
            this.isRecorded = true;
            this.isRecording = false;
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
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
            this.confirmBox();
          } else {
            this.isProcessing = false;
            this.loadingOverlay.dismiss();
          }
        },
      });
    }
  }
  getStory() {
    this.isLoading = true;
    this.apiService
      .getDetails(`/api/books/${this.routeParams.bookId}/Stories/${this.routeParams.storyId}`, Story)
      .subscribe({
        next: (res) => {
          this.story = res;
          if (this.story.answer) {
            this.getServerFileUrl();
          } else {
            this.isLoading = false;
          }
        },
        error: (err: any) => {
          this.isLoading = false;
        },
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
            let audio: any = new Audio(res.url);
            this.story.answer = audio;
            this.isRecorded = true;
            this.isRecording = false;
            this.isAudioAvailable = true;
          }
          this.isLoading = false;
        },
        error: (error: any) => {
          this.isLoading = false;
        },
      });
  }

  updateStoryOnUpload() {
    let fileUploadObj = {
      fileName: this.story.answer,
    };
    this.apiService
      .put(`/api/books/${this.routeParams.bookId}/Stories/${this.routeParams.storyId}/AddAnswer`, fileUploadObj)
      .subscribe({
        next: (res) => {
          this.isProcessing = false;
          this.loadingOverlay.dismiss();
        },
        error: (error) => {
          this.isProcessing = false;
          this.loadingOverlay.dismiss();
        },
      });
  }

  async confirmBox() {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup md ',
      componentProps: {
        title: 'Your story has been recorded successfully!',
        subtitle: 'It is on its way to the recipient to enjoy!',
        confirmbuttonText: 'Back to Request',
        confirmbuttonClass: 'primary',
        imageUrl: 'assets/images/sendstory.svg',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted && !this.isProcessing) {
        this.goBack();
      }
      if (data.role == ModalDismissRole.canceled) {
        // this.cancelRequest();
      }
    });
    return await modal.present();
  }

  async sendStory() {
    this.isProcessing = true;
    this.loadingOverlay = await this.loadingController.create({
      spinner: 'bubbles',
      showBackdrop: true,
      cssClass: 'main-loader',
    });
    this.loadingOverlay.present();

    this.postFile();
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
        this.isRecording = false;
        this.isRecorded = false;
        this.isAudioAvailable = false;
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
        // console.log('popup submitted');
      }
      if (data.role == ModalDismissRole.canceled) {
        // console.log('popup closed');
      }
    });
    return await modal.present();
  }

  ngOnDestroy() {
    console.log('Destroy');
    // this.isRecording=false
  }
}
