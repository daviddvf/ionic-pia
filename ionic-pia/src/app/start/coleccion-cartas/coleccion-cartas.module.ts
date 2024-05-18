import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColeccionCartasPageRoutingModule } from './coleccion-cartas-routing.module';

import { ColeccionCartasPage } from './coleccion-cartas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColeccionCartasPageRoutingModule
  ],
  declarations: [ColeccionCartasPage]
})
export class ColeccionCartasPageModule {}
