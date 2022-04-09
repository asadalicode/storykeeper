import { QACategory } from './../../@shared/models/Category';
import { Component, OnInit } from '@angular/core';
import { SettingsData } from '@app/@shared/models';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  dataModel!: QACategory;
  constructor(private platform: Platform, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAboutUs();
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  getAboutUs() {
    this.apiService.getDetails('/api/InfoData/GetByType/1', QACategory).subscribe({
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
