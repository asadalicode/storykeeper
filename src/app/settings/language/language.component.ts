import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Languages } from '@app/@shared/constants';
import { I18nService } from '@app/i18n/i18n.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  LanguagesName = Languages;
  LanguagesList: any;
  constructor(private i18nService: I18nService, private platform: Platform) {}

  ngOnInit(): void {
    this.getLanguages();
  }
  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
    this.getLanguages();
  }

  getLanguages() {
    this.LanguagesList = this.i18nService.supportedLanguages.map((language) => {
      return {
        name: this.LanguagesName[language],
        value: language,
        flag: `assets/images/flag/${language}.svg`,
        checked: language === this.i18nService.language ? true : false,
      };
    });
    console.log(this.LanguagesList);
  }
}
