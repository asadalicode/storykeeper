import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalDismissRole } from '@app/@shared/constants';
import { ModalController, Platform } from '@ionic/angular';
import { ApiService } from '@app/@shared/sevices/api.service';
import { ToastService } from '@app/@shared/sevices/toast.service';
import { Product, PromoCode } from '@app/@shared/models';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '@app/@shared/sevices/shared.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

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
  promoData: any = [];
  private searchSub$ = new Subject<string>();
  searchValue: string = '';
  calculatedDiscount: any;
  constructor(
    private modalController: ModalController,
    private platform: Platform,
    private sharedService: SharedService,
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private toastService: ToastService
  ) {
    this.createPromoForm();
  }

  ngOnInit(): void {
    this.getProducts();
    this.verifyPromo();
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
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
  }

  selectedProduct(e: any) {
    this.selectedItem = e.detail.value;
    console.log(this.selectedItem);
    this.getPromoByCode(this.searchValue);
  }

  payNow() {
    this.apiService
      .post(
        `/api/Payments/create-checkout-session/${this.selectedItem.id}&promoCode=${this.PromoForm.value.promoCode}`,
        {}
      )
      .subscribe({
        next: (res: any) => {
          if (res.location) {
            window.open(res.location);
          }
        },
        error: (error: any) => {},
      });
  }

  paymentPage() {
    if (this.PromoForm.value.promoCode) {
      this.apiService.getDetails(`/api/PromoCodes/GetByCode/${this.PromoForm.value.promoCode}`, PromoCode).subscribe({
        next: (res) => {
          this.dismiss(false);
          res.isActive
            ? (this.selectedItem.priceInDollars = (
                (this.selectedItem.priceInCents - res.discountInCents) /
                100
              ).toFixed(2))
            : '';
          this.router.navigate(['/', 'payment-methods', this.selectedItem.id, this.selectedItem.priceInDollars], {
            queryParams: { promoCode: this.PromoForm.value.promoCode },
          });
        },
        error: (error) => {
          this.toastService.showToast('error', 'Promo code is invalid or expired');
        },
      });
    } else {
      this.dismiss(false);
      this.router.navigate(['/', 'payment-methods', this.selectedItem.id, this.selectedItem.priceInDollars], {
        queryParams: { promoCode: this.PromoForm.value.promoCode },
      });
    }
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

  searchPromo(event: any) {
    this.searchSub$.next(event.target.value);
  }

  verifyPromo() {
    this.searchSub$.pipe(debounceTime(400), distinctUntilChanged()).subscribe((filterValue: string) => {
      this.searchValue = filterValue.trim().toLowerCase();
      this.getPromoByCode(this.searchValue);
    });
  }

  getPromoByCode(code: string) {
    this.apiService.getDetails(`/api/PromoCodes/GetByCode/${code}`, PromoCode).subscribe({
      next: (res) => {
        if (res.isActive && this.selectedItem) {
          this.calculatedDiscount = (
            this.selectedItem.priceInDollars -
            (this.selectedItem.priceInCents - res.discountInCents) / 100
          ).toFixed(2);
        } else {
          this.calculatedDiscount = false;
        }
      },
      error: (error) => {
        this.calculatedDiscount = false;
      },
    });
  }
}
