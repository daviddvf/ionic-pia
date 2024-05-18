import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpuPlayerPage } from './cpu-player.page';

const routes: Routes = [
  {
    path: '',
    component: CpuPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpuPlayerPageRoutingModule {}
