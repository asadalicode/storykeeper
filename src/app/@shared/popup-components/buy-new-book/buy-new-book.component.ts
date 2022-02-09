import { Component, OnInit } from '@angular/core';
import { ModalDismissRole } from '@app/@shared/constants';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buy-new-book',
  templateUrl: './buy-new-book.component.html',
  styleUrls: ['./buy-new-book.component.scss'],
})
export class BuyNewBookComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  dismiss(isSubmitted: boolean = false) {
    let role = isSubmitted ? ModalDismissRole.submitted : ModalDismissRole.backdroped;
    this.modalController.dismiss('', role);
  }
}
