import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaBkPageRoutingModule } from './carta-bk-routing.module';

import { CartaBkPage } from './carta-bk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaBkPageRoutingModule
  ],
  declarations: [CartaBkPage]
})
export class CartaBkPageModule {}
