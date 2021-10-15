import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfPageRoutingModule } from './inf-routing.module';

import { InfPage } from './inf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfPageRoutingModule
  ],
  declarations: [InfPage]
})
export class InfPageModule {}
