import { ModalDismissRole } from './../../constants';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-info',
  templateUrl: './confirmation-info.component.html',
  styleUrls: ['./confirmation-info.component.scss'],
})
export class ConfirmationInfoComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() imageUrl: string = 'assets/images/about-ion.png';
  @Input() confirmbuttonText: string = '';
  @Input() confirmbuttonClass: string = 'primary';
  @Input() cancelbuttonText: string = '';
  @Input() cancelbuttonClass: string = 'secondary';
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}
  dismiss() {
    this.modalController.dismiss('button clicked');
  }

  submit() {
    this.modalController.dismiss(ModalDismissRole.submitted);
  }
}
