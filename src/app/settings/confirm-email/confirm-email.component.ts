import { ActivatedRoute } from '@angular/router';
import { ToastService } from './../../@shared/sevices/toast.service';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Languages } from '@app/@shared/constants';
import { I18nService } from '@app/i18n/i18n.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss'],
})
export class ConfirmEmailComponent implements OnInit {
  isLoading = false;
  constructor(
    private platform: Platform,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get routeParams() {
    let params: any;
    this.route.queryParams.subscribe((res: any) => {
      params = res;
    });
    return params;
  }

  verifyAccount() {
    this.isLoading = true;
    let data = {
      emailAlliasId: this.routeParams.EmailAlliasId,
      token: this.routeParams.Token,
    };
    console.log(this.routeParams);
    this.apiService.post(`/api/Users/ConfirmAccount`, data).subscribe({
      complete: () => {
        console.log('complate');
      },
      next: (res: any) => {
        this.toastService.showToast('success', 'Your email has been verified.');
        this.isLoading = false;
      },
      error: (error: any) => {
        this.isLoading = false;
      },
    });
  }
}
