import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfPage } from './inf.page';

const routes: Routes = [
  {
    path: '',
    component: InfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfPageRoutingModule {}
