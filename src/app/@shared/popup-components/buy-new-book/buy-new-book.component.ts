import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalDismissRole } from '@app/@shared/constants';
import { ModalController, Platform } from '@ionic/angular';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ToastService } from '@app/@shared/sevices/toast.service';
import { Product } from '@app/@shared/models';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-new-book',
  templateUrl: './buy-new-book.component.html',
  styleUrls: ['./buy-new-book.component.scss'],
})
export class BuyNewBookComponent implements OnInit {
  isLoading = false;
  PromoForm!: FormGroup;
  productsData!: Product[];
  selectedItem: any;
  productBuyObj: any = {};
  constructor(
    private modalController: ModalController,
    private platform: Platform,
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private toastService: ToastService
  ) {
    this.createPromoForm();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  createPromoForm() {
    this.PromoForm = this.fb.group({
      promoCode: [''],
    });
  }

  setPromoCode() {}

  getProducts() {
    this.isLoading = true;
    this.apiService.get('/api/Products', Product).subscribe({
      next: (res: any) => {
        this.productsData = res;
        console.log(res);
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
  }

  selectedProduct(e: any) {
    this.selectedItem = e.detail.value;
  }

  payNow() {
    this.apiService
      .post(
        `/api/Payments/create-checkout-session/${this.selectedItem.id}&promoCode=${this.PromoForm.value.promoCode}`,
        {}
      )
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.location) {
            window.open(res.location);
          }
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }

  paymentPage() {
    console.log('@@@');
    this.dismiss(false);
    this.router.navigate(['/', 'payment-methods', this.selectedItem.id, this.selectedItem.priceInDollars], {
      queryParams: { promoCode: this.PromoForm.value.promoCode },
    });
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  dismiss(isSubmitted: boolean = false) {
    let role = isSubmitted ? ModalDismissRole.submitted : ModalDismissRole.backdroped;
    this.modalController.dismiss('', role);
    // this.router.navigate(['tabs/my-library']);
    // this.router.navigate(['tabs/payment-methods']);
  }
}
