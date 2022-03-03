import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';

import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: marker('Login') } },
  { path: 'create-account', component: CreateNewAccountComponent, data: { title: marker('Create Account') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
