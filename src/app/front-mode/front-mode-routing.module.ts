import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontModePage } from './front-mode.page';

const routes: Routes = [
  {
    path: '',
    component: FrontModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontModePageRoutingModule {}
