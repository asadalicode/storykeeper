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
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {
    if (this.isWeb) GoogleAuth.init();
    //  setTimeout(()=> {
    //    this.checkLoggedIn()

    //  },3000)
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

  // async signIn(): Promise<void> {
  //   const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];

  //   const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
  //   if (result && result.accessToken) {
  //     let user = { token: result.accessToken.token, userId: result.accessToken.userId }
  //   }
  // }

  async doLogin() {
    console.log('login');
    this.isLoading = true;
    let u = await GoogleAuth.signIn()
      .then(async (user: any) => {
        console.log('res:', user);
        let userObj = { username: user.email, password: user.id };
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
            }
          );
      })
      .catch((res: any) => {
        console.log(res);
      });
    console.log(u);
    // const user = await GoogleAuth.signIn()
    // if (user) {

    // }
    // if (user) { console.log("@@@",user),   this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true }); }
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
