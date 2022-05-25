import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';

import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './popup-component/forgot-password/forgot-password.component';
import { ResetPasswordEmailComponent } from './popup-component/reset-password-email/reset-password-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: marker('Login') } },
  { path: 'create-account', component: CreateNewAccountComponent, data: { title: marker('Create Account') } },
  { path: 'reset-password', component: ForgotPasswordComponent, data: { title: marker('Reset Password') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
