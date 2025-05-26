import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackModePage } from './back-mode.page';

const routes: Routes = [
  {
    path: '',
    component: BackModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackModePageRoutingModule {}
