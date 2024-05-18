import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaBkPage } from './carta-bk.page';

const routes: Routes = [
  {
    path: '',
    component: CartaBkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaBkPageRoutingModule {}
