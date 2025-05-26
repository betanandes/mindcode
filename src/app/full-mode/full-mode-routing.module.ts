import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullModePage } from './full-mode.page';

const routes: Routes = [
  {
    path: '',
    component: FullModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullModePageRoutingModule {}
