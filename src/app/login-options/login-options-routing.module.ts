import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginOptionsPage } from './login-options.page';

const routes: Routes = [
  {
    path: '',
    component: LoginOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginOptionsPageRoutingModule {}
