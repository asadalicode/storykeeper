import { BookSharedModule } from './../book-shared/book-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { StripePayComponent } from './stripe-pay/stripe-pay.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    FlexLayoutModule,
    BookSharedModule,
  ],
  providers: [ImagePicker],
  declarations: [HomeComponent, UpdateBookComponent, StripePayComponent],
})
export class HomeModule {}
