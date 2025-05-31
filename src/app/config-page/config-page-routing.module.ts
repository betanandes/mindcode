import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigPagePage } from './config-page.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigPagePageRoutingModule {}
