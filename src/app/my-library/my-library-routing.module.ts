import { ViewSharingComponent } from './view-sharing/view-sharing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/my-library', pathMatch: 'full' },

    {
      path: 'my-library/book/:bookId/:bookTitle',
      component: BookDetailPageComponent,
      data: { title: marker('Book Detail') },
    },
    {
      path: 'my-library/book/edit/:bookId/:bookTitle',
      component: EditBookComponent,
      data: { title: marker('Update Book') },
    },
    {
      path: 'my-library/book/sharing/:bookId',
      component: ViewSharingComponent,
      data: { title: marker('Update Book') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MyLibraryRoutingModule {}
