import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from '@app/@shared/sevices/toast.service';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '@app/@shared';
import { from } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  Form!: FormGroup;
  isLoading = false;
  isVisiblePassword = false;
  isVisibleConfirmPassword = false;

  constructor(
    private platform: Platform,
    private toastService: ToastService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private apiService: ApiService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get routeParams() {
    let params: any;
    this.route.queryParams.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  createForm() {
    this.Form = this.formBuilder.group(
      {
        newPassword: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [Utils.match('newPassword', 'confirmPassword')],
      }
    );
  }

  dismiss(value = false) {
    this.modalController.dismiss('button clicked', value ? 'submitted' : 'closed');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Form?.controls;
  }

  async resetPassowrd() {
    console.log('called');
    this.isLoading = true;

    let data = {
      userId: Number(this.routeParams.userId),
      token: this.routeParams.Token,
      newPassword: this.Form.value.newPassword,
    };
    const loadingOverlay = await this.loadingController.create({
      spinner: 'bubbles',
      showBackdrop: true,
      cssClass: 'main-loader',
    });
    const loading$ = from(loadingOverlay.present());
    console.log(data);
    this.apiService.post(`/api/Users/ResetPassword`, data).subscribe({
      complete: () => {
        console.log('complete');
      },
      next: (res: any) => {
        this.toastService.showToast('success', 'Password reset successfully.');
        this.router.navigate(['/login']);
        loadingOverlay.dismiss();
        // this.dismiss(true);
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
        loadingOverlay.dismiss();
      },
    });
  }
}
