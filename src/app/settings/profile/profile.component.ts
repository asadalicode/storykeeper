import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonRouterOutlet, Platform } from '@ionic/angular';

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
  constructor(private formBuilder: FormBuilder, private platform: Platform, public routerOutlet: IonRouterOutlet) {}

  ngOnInit(): void {
    this.createForm();
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
  private createForm() {
    this.profileForm = this.formBuilder.group({
      image: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: [''],
    });

    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.maxLength(8), Validators.required]],
      confirmPassword: ['', [Validators.maxLength(8), Validators.required]],
    });
  }

  save() {}

  UpdatePassword() {}

  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
}
