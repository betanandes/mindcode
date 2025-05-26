import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackModePageRoutingModule } from './back-mode-routing.module';

import { BackModePage } from './back-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackModePageRoutingModule
  ],
  declarations: [BackModePage]
})
export class BackModePageModule {}
