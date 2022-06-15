import { ConfirmationInfoComponent } from './../../@shared/popup-components/confirmation-info/confirmation-info.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissRole } from '@app/@shared/constants';
import { ImageCredientials, Profile, UserEmail } from '@app/@shared/models';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ToastService } from '@app/@shared/sevices/toast.service';
import { CredentialsService } from '@app/auth';

import { IonRouterOutlet, Platform, ModalController } from '@ionic/angular';
import { AddNewEmailComponent } from '../add-new-email/add-new-email.component';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Utils } from '@app/@shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  uploadFileObj: any;
  uploadCredentials: any;
  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  isLoading = false;
  isModalOpen = false;
  isVisiblePassword = false;
  isVisibleConfirmPassword = false;
  UserEmails!: UserEmail[];
  postImgName: any;
  imgUrl: any;
  alertOptions: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private credentials: CredentialsService,
    private toastService: ToastService,
    private apiService: ApiService,
    private modalController: ModalController,
    private platform: Platform,
    public routerOutlet: IonRouterOutlet
  ) {
    this.setAlertOptions();
  }

  ngOnInit(): void {
    this.createForm();
    this.getUserInfo();
  }

  setAlertOptions() {
    this.alertOptions = [
      { id: 1, title: 'Email Reminder Subscription', isChecked: false },
      { id: 2, title: 'Email Notification Subscription', isChecked: false },
    ];
  }

  onAlertOptionChange(item: any) {
    switch (item.id) {
      case 1:
        this.toggleSubscription('/api/Users/ToggleEmailReminderSubsctiption');
        break;
      case 2:
        this.toggleSubscription('/api/Users/ToggleEmailNotificationsSubsctiption');
        break;
      default:
        break;
    }
  }

  toggleSubscription(url: string) {
    this.apiService.post(url, {}).subscribe({
      next: (res) => {
        this.toastService.showToast('success', 'Updated successfully');
      },
      error: (error) => {},
    });
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get userId() {
    const user: any = this.credentials.credentials;
    return user.userId;
  }

  getUserInfo() {
    this.apiService.getDetails(`/api/Users/${this.userId}`, Profile).subscribe((res: any) => {
      if (res.image) {
        this.imgUrl = res.image;
      }
      if (res) {
        this.profileForm.patchValue(res);
        if (res.emailReminder) {
          this.alertOptions[0].isChecked = true;
        }
        if (res.emailNotification) {
          this.alertOptions[1].isChecked = true;
        }
      }
    });
    this.apiService.get(`/api/Users/Emails`, UserEmail).subscribe((res: any) => {
      this.UserEmails = res;
      console.log(this.UserEmails);
    });
  }
  private createForm() {
    this.profileForm = this.formBuilder.group({
      image: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      role: ['Administrator'],
    });

    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.maxLength(8), Validators.required]],
      confirmPassword: ['', [Validators.maxLength(8), Validators.required]],
    });
  }

  save() {
    this.isLoading = true;
    this.apiService.put(`/api/Users/${this.userId}`, this.profileForm.value).subscribe({
      complete: () => {
        this.isLoading = false;
      },
      next: (res: any) => {
        this.isLoading = false;
        this.toastService.showToast('success', 'Profile updated successfully');
      },
      error: (res: any) => {
        this.isLoading = false;
        this.toastService.showToast('error', 'Error occurred!, please try again');
        console.log('error', res);
      },
    });
  }

  UpdatePassword() {
    this.isLoading = true;
    this.apiService.put(`/api/Users/${this.userId}/ChangePassword`, this.passwordForm.value).subscribe({
      complete: () => {
        this.isLoading = false;
      },
      next: (res: any) => {
        this.isLoading = false;
        this.toastService.showToast('success', 'password updated successfully');
      },
      error: (res: any) => {
        this.isLoading = false;
        this.toastService.showToast('error', 'Error occurred!, please try again');
        console.log('error', res);
      },
    });
  }

  async NewBookEmail() {
    const modal = await this.modalController.create({
      component: AddNewEmailComponent,
      cssClass: 'modal-popup sm',
      swipeToClose: true,
      componentProps: {
        title: 'Add New Email',
      },
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.toastService.showToast('success', 'Email added successfully');
        this.getUserInfo();
      }
    });
    return await modal.present();
  }

  async RemoveEmail(item: UserEmail) {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup sm',
      swipeToClose: true,
      componentProps: {
        title: 'Remove Email',
        subtitle: 'Are you sure you want to remove this email',
        confirmbuttonText: 'Remove',
        cancelbuttonText: 'Cancel',
      },
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.apiService.delete(`/api/Users/Emails/${item.id}`).subscribe((res: any) => {
          this.toastService.showToast('success', 'Email successfully removed.');
          this.getUserInfo();
        });
      }
    });
    return await modal.present();
  }

  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl: any = image.base64String;
    this.imgUrl = 'data:image/png;base64,' + imageUrl; //to show picked image in the UI temporarily
    Utils.dataUrlToFile('data:image/png;base64,' + imageUrl, Utils.UUID + '.png').then((res) => {
      this.getFileCredentials(res);
    });
  }
  getFileCredentials(file: any) {
    this.apiService
      .getDetails(`/api/Files/credentials/userImages/${this.userId}?fileName=${file.name}`, ImageCredientials)
      .subscribe({
        complete: () => {},
        next: (res: any) => {
          this.uploadCredentials = res;
          this.postImgName = `${file.name}`;
          this.uploadFileObj = {
            ...this.uploadCredentials,
            file: file,
          };
          this.postUserImg();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
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

  postUserImg() {
    if (this.uploadCredentials) {
      this.apiService.postFormData(this.uploadCredentials.upload_url, this.fileFileObject).subscribe({
        complete: () => {},
        next: (res: any) => {},
        error: (err: any) => {
          if (err.status == 201) {
            this.updateUserImg();
          }
        },
      });
    }
  }

  updateUserImg() {
    let imgObj = {
      image: this.postImgName,
    };
    this.apiService.put(`/api/Users/UpdateImage/${this.userId}`, imgObj).subscribe({
      complete: () => {},
      next: (res: any) => {},
      error: (err: any) => {
        if (err.status == 201) {
        }
      },
    });
  }
}
