import { HelpComponent } from './help/help.component';
import { TermOfServiceComponent } from './term-of-service/term-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { SettingsComponent } from '@app/settings/settings.component';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about/about.component';
import { LanguageComponent } from './language/language.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'settings', component: SettingsComponent, data: { title: marker('Settings') } },
    { path: 'profile', component: ProfileComponent, data: { title: marker('Profile') } },
    { path: 'about', component: AboutComponent, data: { title: marker('About') } },
    { path: 'language', component: LanguageComponent, data: { title: marker('Languages') } },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { title: marker('Privacy Policy') } },
    { path: 'term-of-services', component: TermOfServiceComponent, data: { title: marker('Term of Services') } },
    { path: 'help', component: HelpComponent, data: { title: marker('Help') } },
    { path: 'confirmAccount', component: ConfirmEmailComponent, data: { title: marker('Help') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SettingsRoutingModule {}
