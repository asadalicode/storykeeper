import { MyLibraryRoutingModule } from './my-library-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';
import { ViewSharingComponent } from './view-sharing/view-sharing.component';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { AudioRecordingComponent } from './audio-recording/audio-recording.component';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MyLibraryRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
  ],
  providers: [ImagePicker],
  declarations: [EditBookComponent, BookDetailPageComponent, ViewSharingComponent, AudioRecordingComponent],
})
export class MyLibraryModule {}
