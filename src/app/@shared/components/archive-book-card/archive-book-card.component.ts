import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '@app/@shared/models/book';
import { SharedService } from '@app/@shared/sevices/shared.service';
import { myLibraryTabs } from '@app/@shared/constants';
import { IonRouterOutlet, ModalController, PopoverController } from '@ionic/angular';
import { ConfirmationInfoComponent } from '@app/@shared/popup-components/confirmation-info/confirmation-info.component';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-archive-book-card',
  templateUrl: './archive-book-card.component.html',
  styleUrls: ['./archive-book-card.component.scss'],
})
export class ArchiveBookCardComponent implements OnInit {
  @Input() book!: Book;
  @Output() confirmArchiveBook = new EventEmitter<any>();

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private apiService: ApiService,
    private toastService: ToastService,
    public popoverController: PopoverController
  ) {}

  ngOnInit(): void {}

  get isBookPending(): boolean {
    return this.book.status == 1; // visit @app/@shared/constants
  }
  get isBookShared(): boolean {
    return this.book.status == 4; // visit @app/@shared/constants
  }

  toggleArchiveBook(book: Book) {
    this.confirmArchiveBook.emit(book);
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
