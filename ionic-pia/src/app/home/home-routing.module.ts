import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { StartPage } from '../start/start.page';
import { EstadisticasPage } from '../estadisticas/estadisticas.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'start',
    component: StartPage
  },
  {
    path: 'estadisticas/:email',
    component: EstadisticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
