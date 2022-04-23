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
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from '@env/environment';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [PaymentMethodsComponent, SuccessComponent, ErrorComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    TranslateModule,
    FlexLayoutModule,
    IonicModule,
    I18nModule,
    SharedModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot(environment.stripe_pb_key),
    FormsModule,
  ],
  providers: [InAppBrowser],
})
export class PaymentModule {}
