import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { EstadisticasPage } from '../estadisticas/estadisticas.page';
import { StartPage } from '../start/start.page';
import { CartaPage } from '../start/carta/carta.page';
import { ColeccionCartasPage } from '../start/coleccion-cartas/coleccion-cartas.page';
import { CartaBkPage } from '../start/carta-bk/carta-bk.page';
import { TableroPage } from '../start/tablero/tablero.page';
import { CpuPlayerPage } from '../start/cpu-player/cpu-player.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, EstadisticasPage, StartPage, CartaPage, ColeccionCartasPage, CartaBkPage, TableroPage, CpuPlayerPage]
})
export class HomePageModule {}
