import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '@app/@shared/models/book';
import { SharedService } from '@app/@shared/sevices/shared.service';
import { myLibraryTabs } from '@app/@shared/constants';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.scss'],
})
export class BooksCardComponent implements OnInit {
  @Input() book!: Book;
  constructor(
    private router: Router,
    private sharedService: SharedService,
    public popoverController: PopoverController
  ) {}

  ngOnInit(): void {}

  get isBookPending(): boolean {
    return this.book.status == 1; // visit @app/@shared/constants
  }
  get isBookShared(): boolean {
    return this.book.status == 4; // visit @app/@shared/constants
  }

  updateBook(book: Book) {
    this.sharedService.setImgInStorage(book.image);
    if (book.status == 1) {
      // pending
      this.router.navigate([`my-library/update-book/${book.id}/${book.title}`]);
    } else if (book.status == 3 || book.status == 5 || book.status == 99) {
      // inprogress
      this.router.navigate([`my-library/book/${book.id}/${book.title}`], { queryParams: { bookType: book.type } });
    }
  }

  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: PopoverComponent,
  //     cssClass: 'my-custom-class',
  //     event: ev,
  //     translucent: true
  //   });
  //   await popover.present();

  //   const { role } = await popover.onDidDismiss();
  //   console.log('onDidDismiss resolved with role', role);
  // }
}
