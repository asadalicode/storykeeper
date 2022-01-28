import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { I18nModule } from '@app/i18n';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [IonicModule, TranslateModule, CommonModule, RouterModule, I18nModule],
  declarations: [LoaderComponent, HeaderComponent],
  exports: [LoaderComponent, HeaderComponent],
})
export class SharedModule {}
