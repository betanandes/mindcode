import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullModePageRoutingModule } from './full-mode-routing.module';

import { FullModePage } from './full-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullModePageRoutingModule
  ],
  declarations: [FullModePage]
})
export class FullModePageModule {}
