import { ApiService } from '@app/@shared/sevices/api.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

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
    private stripeService: StripeService,
    private iab: InAppBrowser
  ) {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  openWebView() {
    const browser = this.iab.create(
      'https://checkout.stripe.com/pay/cs_test_a1cHr4tFFv2Tnd8qRYtNBmTewODoGkTh6lAbWGbC6R8cvcsJ8yq9aRDxh3#fidkdWxOYHwnPyd1blpxYHZxWjA0TkZXYE9AcVdCSjBdYGRgaVNtdHd2NjNvaU9MMmBcNGZVMWF3NkNyRlZNPU9QMkg8dn9WcGx2ZlUwZExGbzx0dUoyT21CU1RLVzNkUktrRFdAbndTc3dnNTVSXHRDbDF%2FTCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl'
    );

    setTimeout(() => {
      console.log(browser);
      browser.close();
    }, 7000);
  }

  createToken(): void {
    const name = this.stripeTest.get('name')?.value;
    this.stripeService.redirectToCheckout();
    this.stripeService.createToken(this.card.element, { name }).subscribe((result) => {
      if (result.token) {
        // Use the token
        console.log(result);
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
        this.openWebView();
        // window.open(
        //   'https://checkout.stripe.com/pay/cs_test_a1cHr4tFFv2Tnd8qRYtNBmTewODoGkTh6lAbWGbC6R8cvcsJ8yq9aRDxh3#fidkdWxOYHwnPyd1blpxYHZxWjA0TkZXYE9AcVdCSjBdYGRgaVNtdHd2NjNvaU9MMmBcNGZVMWF3NkNyRlZNPU9QMkg8dn9WcGx2ZlUwZExGbzx0dUoyT21CU1RLVzNkUktrRFdAbndTc3dnNTVSXHRDbDF%2FTCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl'
        // );
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
