import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpuPlayerPageRoutingModule } from './cpu-player-routing.module';

import { CpuPlayerPage } from './cpu-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpuPlayerPageRoutingModule
  ],
  declarations: [CpuPlayerPage]
})
export class CpuPlayerPageModule {}
