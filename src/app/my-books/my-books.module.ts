import { MyBooksListComponent } from './my-books-list/my-books-list.component';
import { MyBooksRoutingModule } from './my-books-routing.module';
import { BookSharedModule } from './../book-shared/book-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MyBooksListComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MyBooksRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    BookSharedModule,
  ],
})
export class MyBooksModule {}
