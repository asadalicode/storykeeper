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
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { AngularWavesurferServiceModule } from 'angular-wavesurfer-service';
import { RecordingPlayerComponent } from './components/recording-player/recording-player.component';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { FilterPipe } from './pipes/filterPipe';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { ImageComponent } from './components/image/image.component';
import { ImageDirective } from './directives/image.directive';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdTimerModule } from 'angular-cd-timer';
import { ArchiveBookCardComponent } from './components/archive-book-card/archive-book-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    TranslateModule,
    CommonModule,
    RouterModule,
    I18nModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LazyLoadImageModule,
    AngularWavesurferServiceModule,
    BrowserAnimationsModule,
    CdTimerModule,
  ],
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    FindOnSocialComponent,
    BuyNewBookComponent,
    ConfirmationInfoComponent,
    BooksCardComponent,
    MobileHeaderComponent,
    AudioPlayerComponent,
    RecordingPlayerComponent,
    FilterPipe,
    NoDataFoundComponent,
    ImageComponent,
    ImageDirective,
    ArchiveBookCardComponent,
  ],
  providers: [InAppBrowser, Chooser],
  exports: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    FindOnSocialComponent,
    BuyNewBookComponent,
    ConfirmationInfoComponent,
    BooksCardComponent,
    ArchiveBookCardComponent,
    MobileHeaderComponent,
    AudioPlayerComponent,
    RecordingPlayerComponent,
    FilterPipe,
    NoDataFoundComponent,
    ImageComponent,
    ImageDirective,
  ],
})
export class SharedModule {}
