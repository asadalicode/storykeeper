import { Component, OnInit } from '@angular/core';
import { QACategory, SettingsData } from '@app/@shared/models';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  dataModel!: QACategory;
  constructor(private platform: Platform, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPrivacyData();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getPrivacyData() {
    this.apiService.getDetails('/api/InfoData/GetByType/2', QACategory).subscribe({
      complete: () => {
        console.log('complate');
      },
      next: (res: any) => {
        this.dataModel = res;
        console.log(this.dataModel);
      },
      error: () => {
        console.log('error');
      },
    });
  }
}
