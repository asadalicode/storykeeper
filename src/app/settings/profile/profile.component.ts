import { ConfirmationInfoComponent } from './../../@shared/popup-components/confirmation-info/confirmation-info.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissRole } from '@app/@shared/constants';
import { Profile, UserEmail } from '@app/@shared/models';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ToastService } from '@app/@shared/sevices/toast.service';
import { CredentialsService } from '@app/auth';

import { IonRouterOutlet, Platform, ModalController } from '@ionic/angular';
import { AddNewEmailComponent } from '../add-new-email/add-new-email.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  isLoading = false;
  isModalOpen = false;
  isVisiblePassword = false;
  isVisibleConfirmPassword = false;
  UserEmails!: UserEmail[];
  constructor(
    private formBuilder: FormBuilder,
    private credentials: CredentialsService,
    private toastService: ToastService,
    private apiService: ApiService,
    private modalController: ModalController,
    private platform: Platform,
    public routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getUserInfo();
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get userId() {
    const user: any = this.credentials.credentials;
    return user.userId;
  }

  getUserInfo() {
    console.log(this.userId);
    this.apiService.getDetails(`/api/Users/${this.userId}`, Profile).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.profileForm.patchValue(res);
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
        this.toastService.showToast('success', 'Email successfully addedd');
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
}
