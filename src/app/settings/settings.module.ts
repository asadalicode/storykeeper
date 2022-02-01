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

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, I18nModule, SettingsRoutingModule, SharedModule],
  declarations: [
    SettingsComponent,
    LanguageComponent,
    HelpComponent,
    PrivacyPolicyComponent,
    TermOfServiceComponent,
    AboutComponent,
  ],
})
export class SettingsModule {}
