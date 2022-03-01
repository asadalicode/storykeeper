import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { Shell } from '@app/shell/shell.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'payment-methods', component: PaymentMethodsComponent, data: { title: marker('Payment methods') } },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
