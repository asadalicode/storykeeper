import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private myToast: any;

  constructor(private toast: ToastController) {}

  showToast(color?: any, message?: any) {
    this.myToast = this.toast
      .create({
        message: message || 'success',
        color: color == 'success' ? 'primary' : 'danger',
        duration: 2000,
        animated: true,
      })
      .then((toastData) => {
        console.log(toastData);
        toastData.present();
      });
  }
  HideToast() {
    this.myToast = this.toast.dismiss();
  }
}
