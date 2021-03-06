import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, Platform } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { forkJoin, from } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed, Utils } from '@shared';
import { AuthenticationService } from '..';
import { ToastService } from '@app/@shared/sevices/toast.service';

const log = new Logger('signup');
@UntilDestroy()
@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss'],
})
export class CreateNewAccountComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  signupForm!: FormGroup;
  isLoading = false;
  isVisiblePassword = false;
  isVisibleConfirmPassword = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private loadingController: LoadingController,
    private authenticationService: AuthenticationService,
    private toastService: ToastService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm?.controls;
  }

  async signup() {
    this.isLoading = true;
    const signup$ = this.authenticationService.signup(this.signupForm.value);
    const loadingOverlay = await this.loadingController.create({
      spinner: 'bubbles',
      showBackdrop: true,
      cssClass: 'main-loader',
    });
    const loading$ = from(loadingOverlay.present());
    forkJoin([signup$, loading$])
      .pipe(
        map(([credentials, ...rest]) => credentials),
        finalize(() => {
          this.signupForm.markAsPristine();
          this.isLoading = false;
          loadingOverlay.dismiss();
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: (credentials) => {
          log.debug(`${credentials.username} successfully signup`);
          this.toastService.showToast('success', `Successfully registered`);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          log.debug(`signup error: ${error}`);
          this.error = error;
          for (var i in error.error) {
            this.toastService.showToast('error', error.error[i][0]);
          }

          // this.toastService.showToast('error', 'Error occurred, Please contact Administrator');
        },
      });
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  private createForm() {
    this.signupForm = this.formBuilder.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Utils.match('password', 'confirmPassword')],
      }
    );
  }
}
