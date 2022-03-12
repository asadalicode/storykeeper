import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { TranslateModule } from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookChaptersComponent } from './book-chapters/book-chapters.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { IonicModule } from '@ionic/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShareBookComponent } from './share-book/share-book.component';

@NgModule({
  declarations: [BookChaptersComponent, AddNewQuestionComponent, QuestionCardComponent, ShareBookComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
  ],
  exports: [BookChaptersComponent, AddNewQuestionComponent, QuestionCardComponent],
})
export class BookSharedModule {}
