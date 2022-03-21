import { ModalDismissRole } from './../../@shared/constants';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-request-popup',
  templateUrl: './request-popup.component.html',
  styleUrls: ['./request-popup.component.scss'],
})
export class RequestPopupComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() confirmbuttonClass = '';
  @Input() confirmbuttonText = '';
  constructor(private modalController: ModalController) {}
  ngOnInit(): void {}
  dismiss(isSubmitted = false) {
    let role = isSubmitted ? ModalDismissRole.canceled : ModalDismissRole.backdroped;
    this.modalController.dismiss('', role);
  }

  submit() {
    this.modalController.dismiss('', ModalDismissRole.submitted);
  }
}
