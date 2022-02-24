import { Component, OnInit } from '@angular/core';
import { SettingsData } from '@app/@shared/models';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  dataModel!: SettingsData;
  constructor(private platform: Platform, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPrivacyData();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getPrivacyData() {
    this.apiService.get('/api/InfoData/GetByType/2').subscribe({
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
