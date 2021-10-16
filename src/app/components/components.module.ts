import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDatoComponent } from './card-dato/card-dato.component';
import { CardPerfilComponent } from './card-perfil/card-perfil.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CardDatoComponent,
    CardPerfilComponent
  ],
  exports: [
    CardDatoComponent,
    CardPerfilComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
