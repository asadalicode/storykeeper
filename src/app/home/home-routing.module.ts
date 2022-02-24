import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { UpdateBookComponent } from './update-book/update-book.component';
import { StripePayComponent } from './stripe-pay/stripe-pay.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/my-library', pathMatch: 'full' },
    { path: 'my-library', component: HomeComponent, data: { title: marker('My Library') } },
    { path: 'stripe-pay', component: StripePayComponent, data: { title: marker('Stripe') } },
    {
      path: 'my-library/update-book/:bookId/:bookTitle',
      component: UpdateBookComponent,
      data: { title: marker('Update Book') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
