import { ApiService } from '@app/@shared/sevices/api.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {
  constructor(private platform: Platform, private apiService: ApiService) {}

  ngOnInit(): void {}

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
}
