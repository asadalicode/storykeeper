import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { I18nModule } from '@app/i18n';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { FindOnSocialComponent } from './components/find-on-social/find-on-social.component';
import { BuyNewBookComponent } from './popup-components/buy-new-book/buy-new-book.component';
import { ConfirmationInfoComponent } from './popup-components/confirmation-info/confirmation-info.component';
import { BooksCardComponent } from './components/books-card/books-card.component';
@NgModule({
  imports: [IonicModule, TranslateModule, CommonModule, RouterModule, I18nModule, FlexLayoutModule],
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    FindOnSocialComponent,
    BuyNewBookComponent,
    ConfirmationInfoComponent,
    BooksCardComponent,
  ],
  exports: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    FindOnSocialComponent,
    BuyNewBookComponent,
    ConfirmationInfoComponent,
    BooksCardComponent,
  ],
})
export class SharedModule {}
