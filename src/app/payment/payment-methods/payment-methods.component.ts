import { ApiService } from '@app/@shared/sevices/api.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };
  stripeTest!: FormGroup;
  constructor(
    private platform: Platform,
    private apiService: ApiService,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  createToken(): void {
    const name = this.stripeTest.get('name')?.value;
    this.stripeService.redirectToCheckout();
    this.stripeService.createToken(this.card.element, { name }).subscribe((result) => {
      if (result.token) {
        // Use the token
        console.log(result.token.id);
      } else if (result.error) {
        // Error creating the token
        console.log(result.error.message);
      }
    });
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  payNow() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' as 'response',
    };
    this.apiService.post('/api/Payments/create-checkout-session/1', {}, httpOptions).subscribe({
      next: (res: HttpResponse<any>) => {
        console.log(res.headers.get('content-length'));
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
