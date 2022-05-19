import { ApiService } from '@app/@shared/sevices/api.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { StripeService, StripeCardNumberComponent } from 'ngx-stripe';

import { StripeCardElementOptions, StripeElementsOptions, PaymentIntent } from '@stripe/stripe-js';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { ToastService } from '@app/@shared/sevices/toast.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {
  isLoading = false;
  @ViewChild(StripeCardNumberComponent) card!: StripeCardNumberComponent;

  cardOptions: StripeCardElementOptions = {
    hideIcon: false,
    style: {
      base: {
        iconColor: '#31325F',
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
    locale: 'en',
  };
  stripeForm!: FormGroup;
  constructor(
    private platform: Platform,
    private apiService: ApiService,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private toastService: ToastService,
    private router: Router,
    private iab: InAppBrowser
  ) {
    this.stripeForm = this.fb.group({
      // name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.routeParams);
    // this.createPaymentIntent().subscribe({
    //   next: (pi: any) => {
    //     this.elementsOptions.clientSecret = pi.clientSecret;
    //     console.log(this.elementsOptions)
    //   },
    // });
  }

  get routeParams() {
    let params: any;
    this.route.params.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  private createPaymentIntent(): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(`/api/Payments/create-payment-intent/${this.routeParams.productId}`, {});
  }

  payNow() {
    if (this.stripeForm.valid) {
      this.isLoading = true;
      this.createPaymentIntent()
        .pipe(
          switchMap((pi: any) =>
            this.stripeService.confirmCardPayment(pi.clientSecret, {
              payment_method: {
                card: this.card.element,
              },
            })
          )
        )
        .subscribe((result: any) => {
          console.log(result);
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            this.toastService.showToast('error', result.error.message);
            this.isLoading = false;
            console.log('ERROR');
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              this.isLoading = false;
              this.router.navigate(['/success']);
              console.log('Succeeded');
              // Show a success message to your customer
            }
          }
        });
    } else {
      this.isLoading = false;
      console.log(this.stripeForm);
    }
  }
}
