import { MyBooksListComponent } from './my-books-list/my-books-list.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from './../shell/shell.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/my-books', pathMatch: 'full' },

    {
      path: 'my-books',
      component: MyBooksListComponent,
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
