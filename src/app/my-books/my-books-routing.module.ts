import { BookDetailsComponent } from './book-details/book-details.component';
import { MyBooksListComponent } from './my-books-list/my-books-list.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from './../shell/shell.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecordStoryComponent } from './record-story/record-story.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/my-books', pathMatch: 'full' },

    {
      path: 'my-books',
      component: MyBooksListComponent,
      data: { title: marker('My Books') },
    },
    {
      path: 'my-books/book-detail/:bookId',
      component: BookDetailsComponent,
      data: { title: marker('My Books') },
    },
    {
      path: 'my-books/record-story/:bookId',
      component: RecordStoryComponent,
      data: { title: marker('My Books') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MyBooksRoutingModule {}
