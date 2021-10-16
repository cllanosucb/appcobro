import { Component, OnInit } from '@angular/core';
import { list } from 'src/app/interfaces/data.model';
import { DataService } from 'src/app/services/data.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: list[] = [];
  nombre_completo: string = '';
  ci: string = '';
  codigo: string = '';

  constructor(
    private loaderService: LoaderService,
    private dataService: DataService,
  ) {}

  async ngOnInit() {
    this.loaderService.presentLoading('Espere');
    const resp = await this.dataService.getDatos();
    console.log("home ", resp);
    this.nombre_completo = resp[0][1].nombre_completo;
    this.ci = resp[0][1].ci;
    this.codigo = resp[0][1].codigo;
    this.data.push(...resp);
    
    await this.loaderService.dismisLoading(); 
  }

}
