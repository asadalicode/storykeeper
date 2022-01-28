import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { I18nModule } from '@app/i18n';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  imports: [IonicModule, TranslateModule, CommonModule, RouterModule, I18nModule],
  declarations: [LoaderComponent, HeaderComponent, FooterComponent],
  exports: [LoaderComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
