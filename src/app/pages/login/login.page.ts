import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { list } from 'src/app/interfaces/data.model';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nit: String = '';
  data: Array<list>=[];
  msg: String = 'Nit no encontrado';
  error: Boolean = false;

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
  }
  
  ingresar( fingresar ) {
    if(fingresar.invalid) {return;}

    console.log(this.nit);    
    this.loaderService.presentLoading("Espere");
    this.dataService.getData(this.nit)
      .subscribe(async resp => {
        this.data = resp;
        if(this.data.length > 0) {
          this.loaderService.dismisLoading();
          this.navCtrl.navigateRoot('tabs');
        }else {
          await this.loaderService.dismisLoading();
          this.error = true;
        }
        //console.log(this.data[1][1].categoria);
      });

  }

}
