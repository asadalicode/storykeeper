import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/@shared/sevices/api.service';
import { QACategory, SettingsData } from '@app/@shared/models';

@Component({
  selector: 'app-term-of-service',
  templateUrl: './term-of-service.component.html',
  styleUrls: ['./term-of-service.component.scss'],
})
export class TermOfServiceComponent implements OnInit {
  dataModel!: QACategory;
  constructor(private platform: Platform, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTermsData();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getTermsData() {
    this.apiService.getDetails('/api/InfoData/GetByType/3', QACategory).subscribe({
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
