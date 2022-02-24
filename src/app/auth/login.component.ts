import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, Platform } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { forkJoin, from } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from './authentication.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { ToastController } from '@ionic/angular';
import { ToastService } from '@app/@shared/sevices/toast.service';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

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

  ngOnInit() {
    if (this.isWeb) GoogleAuth.init();
  }

  async getCurrentState(): Promise<boolean> {
    const result = await FacebookLogin.getCurrentAccessToken().catch(() => undefined);
    return !(result === undefined || !result.hasOwnProperty('accessToken'));
  }

  async getEmail(): Promise<any> {
    const result = await FacebookLogin.getProfile<{
      email: string;
    }>({
      fields: ['email'],
    }).catch(() => undefined);
    if (result === undefined) {
      return null;
    }
    return result.email;
  }

  async signIn(): Promise<void> {
    console.log('@@@');
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];

    const result = await FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    });
    if (result && result.accessToken) {
      console.log(result);
      this.getEmail().then((res: any) => {
        console.log(res);
      });
    }
  }

  async signOut(): Promise<void> {
    await FacebookLogin.logout();
  }

  async googleLogin() {
    console.log('login');
    this.isLoading = true;
    let u = await GoogleAuth.signIn()
      .then(async (user: any) => {
        let userObj = { username: user.email, password: user.id };
        console.log('res:', user);
        const login$ = this.authenticationService.login(userObj);
        const loadingOverlay = await this.loadingController.create({});
        const loading$ = from(loadingOverlay.present());
        forkJoin([login$, loading$])
          .pipe(
            map(([credentials, ...rest]) => credentials),
            finalize(() => {
              this.loginForm.markAsPristine();
              this.isLoading = false;
              loadingOverlay.dismiss();
            }),
            untilDestroyed(this)
          )
          .subscribe(
            (credentials) => {
              log.debug(`${credentials.username} successfully logged in`);
              this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true });
            },
            (error) => {
              log.debug(`Login error: ${error}`);
              this.error = error;
              this.toastService.showToast('error', 'Google signin not implemented yet');
            }
          );
      })
      .catch((res: any) => {
        console.log(res);
      });
    console.log(u);
  }

  checkLoggedIn() {
    GoogleAuth.refresh()
      .then((data) => {
        if (data.accessToken) {
          console.log(data);
          // already logged in
          this.logout();
        }
      })
      .catch((e) => {
        if (e.type === 'userLoggedOut') {
          console.log(e.type);
        }
      });
  }

  logout() {
    GoogleAuth.signOut();
  }
  async login() {
    this.isLoading = true;
    const login$ = this.authenticationService.login(this.loginForm.value);
    const loadingOverlay = await this.loadingController.create({
      spinner: 'bubbles',
      showBackdrop: true,
      cssClass: 'main-loader',
    });
    const loading$ = from(loadingOverlay.present());
    forkJoin([login$, loading$])
      .pipe(
        map(([credentials, ...rest]) => credentials),
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
          loadingOverlay.dismiss();
        }),
        untilDestroyed(this)
      )
      .subscribe(
        (credentials) => {
          console.log(credentials);
          log.debug(`${credentials.username} successfully logged in`);
          this.toastService.showToast('success', `Successfully logged in`);
          this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true });
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
          this.toastService.showToast('error', 'Email or password incorrect');
        }
      );
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
