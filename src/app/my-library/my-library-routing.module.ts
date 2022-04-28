import { EditChapterComponent } from './edit-chapter/edit-chapter.component';
import { AudioRecordingComponent } from './audio-recording/audio-recording.component';
import { ViewSharingComponent } from './view-sharing/view-sharing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/my-library', pathMatch: 'full' },

    {
      path: 'my-library/book/:bookId/:bookTitle',
      component: BookDetailPageComponent,
      data: { title: marker('Book Detail') },
    },
    {
      path: 'my-library/sharing/:bookId/:bookTitle',
      component: ViewSharingComponent,
      data: { title: marker('View Shared') },
    },
    {
      path: 'my-library/recording/:bookId/:storyId/:storyTitle',
      component: AudioRecordingComponent,
      data: { title: marker('View Shared') },
    },
    {
      path: 'my-library/edit-chapter/:bookId/:bookTitle',
      component: ChaptersListComponent,
      data: { title: marker('View Shared') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MyLibraryRoutingModule {}
