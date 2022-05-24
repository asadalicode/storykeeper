import { ConfirmationInfoComponent } from './../@shared/popup-components/confirmation-info/confirmation-info.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  IonRouterOutlet,
  MenuController,
  ModalController,
  Platform,
} from '@ionic/angular';
import { ActionSheetButton, ActionSheetOptions, TextFieldTypes } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';

import { I18nService } from '@app/i18n/i18n.service';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { BuyNewBookComponent } from '@app/@shared/popup-components/buy-new-book/buy-new-book.component';
import { ModalDismissRole } from '@app/@shared/constants';
import { SharedService } from '@app/@shared/sevices/shared.service';
import { Subscription } from 'rxjs';
import { ApiService } from '@app/@shared/sevices/api.service';
import { Profile } from '@app/@shared/models';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  sidePanelSubscription!: Subscription;
  userinfo: any;
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private platform: Platform,
    private menu: MenuController,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService,
    private apiService: ApiService,
    public modalController: ModalController,
    private sharedService: SharedService,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {
    this.openSideMenu();
    this.getUserInfo();
  }

  async showProfileActions() {
    let createdActionSheet: any;
    const buttons: ActionSheetButton[] = [
      {
        text: this.translateService.instant('Logout'),
        icon: this.platform.is('ios') ? undefined : 'log-out',
        role: 'destructive',
        handler: () => this.logout(),
      },
      {
        text: this.translateService.instant('Change language'),
        icon: this.platform.is('ios') ? undefined : 'globe',
        handler: async () => {
          // Wait for action sheet dismiss animation to finish, see "Dismissing And Async Navigation" section in:
          // http://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/#advanced
          await createdActionSheet.dismiss();
          this.changeLanguage();
          return false;
        },
      },
      {
        text: this.translateService.instant('Cancel'),
        icon: this.platform.is('ios') ? undefined : 'close',
        role: 'cancel',
      },
    ];

    // On Cordova platform language is set to the device language
    if (this.platform.is('cordova')) {
      buttons.splice(1, 1);
    }

    const actionSheetOptions: ActionSheetOptions = {
      header: this.username || undefined,
      buttons,
    };

    createdActionSheet = await this.actionSheetController.create(actionSheetOptions);
    await createdActionSheet.present();
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  private async changeLanguage() {
    const alertController = await this.alertController.create({
      header: this.translateService.instant('Change language'),
      inputs: this.i18nService.supportedLanguages.map((language) => ({
        type: 'radio' as TextFieldTypes,
        name: language,
        label: language,
        value: language,
        checked: language === this.i18nService.language,
      })),
      buttons: [
        {
          text: this.translateService.instant('Cancel'),
          role: 'cancel',
        },
        {
          text: this.translateService.instant('Ok'),
          handler: (language) => {
            this.i18nService.language = language;
          },
        },
      ],
    });
    await alertController.present();
  }

  get userId() {
    const user: any = this.credentialsService.credentials;
    return user.userId;
  }

  getUserInfo() {
    this.apiService.getDetails(`/api/Users/${this.userId}`, Profile).subscribe((res: any) => {
      this.userinfo = res;
    });
  }

  closeMenu() {
    this.menu.close();
  }

  //open side menu from other components
  openSideMenu() {
    this.sidePanelSubscription = this.sharedService.listen().subscribe({
      next: (res: any) => {
        if (res) {
          this.menu.open();
        }
      },
    });
  }

  async buyNewBook() {
    const modal = await this.modalController.create({
      component: BuyNewBookComponent,
      cssClass: 'modal-popup sm',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      if (data.role == ModalDismissRole.submitted) {
        this.newBookAvailable();
      }
    });
    return await modal.present();
  }

  async newBookAvailable() {
    const modal = await this.modalController.create({
      component: ConfirmationInfoComponent,
      cssClass: 'modal-popup sm',
      componentProps: {
        title: 'New book available',
        imageUrl: 'assets/images/about-ion.png',
        confirmbuttonText: 'Ok',
        confirmbuttonClass: 'primary',
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  ngOnDestroy() {
    if (this.sidePanelSubscription) {
      this.sidePanelSubscription.unsubscribe();
    }
  }
}
