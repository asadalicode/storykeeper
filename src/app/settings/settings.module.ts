import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { I18nModule } from '@app/i18n';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { LanguageComponent } from './language/language.component';
import { HelpComponent } from './help/help.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermOfServiceComponent } from './term-of-service/term-of-service.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '@app/@shared';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddNewEmailComponent } from './add-new-email/add-new-email.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ArchiveBooksComponent } from './archive-books/archive-books.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    IonicModule,
    I18nModule,
    SettingsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    SettingsComponent,
    LanguageComponent,
    HelpComponent,
    PrivacyPolicyComponent,
    TermOfServiceComponent,
    AboutComponent,
    ProfileComponent,
    AddNewEmailComponent,
    ConfirmEmailComponent,
    ArchiveBooksComponent,
  ],
})
export class SettingsModule {}
