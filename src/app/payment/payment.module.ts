import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { I18nModule } from '@app/i18n';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PaymentRoutingModule } from './payment-routing.module';

@NgModule({
  declarations: [PaymentMethodsComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    TranslateModule,
    FlexLayoutModule,
    IonicModule,
    I18nModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PaymentModule {}
