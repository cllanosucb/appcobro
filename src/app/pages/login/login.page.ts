import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { list } from 'src/app/interfaces/data.model';
import { DataService } from 'src/app/services/data.service';

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
    private dataService: DataService
  ) { }

  ngOnInit() {
  }
  
  ingresar( fingresar ) {
    if(fingresar.invalid) {return;}

    console.log(this.nit);    

    this.dataService.getData(this.nit)
      .subscribe(resp => {
        this.data = resp;
        console.log(this.data);
        console.log(this.data.length);
        if(this.data.length > 0) {
          this.navCtrl.navigateRoot('tabs');
        }else {
          this.error = true;
        }
        //console.log(this.data[1][1].categoria);
      });

  }

}
