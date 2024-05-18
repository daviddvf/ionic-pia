import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColeccionCartasPage } from './coleccion-cartas.page';

const routes: Routes = [
  {
    path: ' ',
    component: ColeccionCartasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColeccionCartasPageRoutingModule {}
