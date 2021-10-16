import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading:any;

  constructor(private loadingCtrl: LoadingController) { }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'custom-class custom-loading',
      message,
      spinner: "bubbles",//"bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-small" ,
      translucent: true,
      backdropDismiss: true
    });
    return this.loading.present();
  }

  async dismisLoading(){
    return await this.loading.dismiss();
  }

}
