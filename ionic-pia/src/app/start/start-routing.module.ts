import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: '',
    component: StartPage
  },  {
    path: 'coleccion-cartas',
    loadChildren: () => import('./coleccion-cartas/coleccion-cartas.module').then( m => m.ColeccionCartasPageModule)
  },
  {
    path: 'tablero',
    loadChildren: () => import('./tablero/tablero.module').then( m => m.TableroPageModule)
  },
  {
    path: 'carta',
    loadChildren: () => import('./carta/carta.module').then( m => m.CartaPageModule)
  },
  {
    path: 'carta-bk',
    loadChildren: () => import('./carta-bk/carta-bk.module').then( m => m.CartaBkPageModule)
  },
  {
    path: 'cpu-player',
    loadChildren: () => import('./cpu-player/cpu-player.module').then( m => m.CpuPlayerPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
