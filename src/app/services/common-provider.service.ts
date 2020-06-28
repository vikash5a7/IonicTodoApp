import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonProviderService {

  constructor(
    public loadingController: LoadingController,
    private toastCtrl: ToastController,
  ) { }

  async loadingPresent(message: string = null, duration: number = null) {
    const loading = await this.loadingController.create({
     message, duration,
    });
    return await loading.present();
}

async loadingDismiss() {
    setTimeout(() => {
        return this.loadingController.dismiss();
    }, 1000);
}
  async toastShow(messageToast: any, toastColor: string) {
    this.toastCtrl.create({
      message: messageToast,
      duration: 3000,
      color : toastColor
    }).then((toast) => {
      toast.present();
    });
  }

}
