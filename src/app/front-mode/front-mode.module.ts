import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontModePageRoutingModule } from './front-mode-routing.module';

import { FrontModePage } from './front-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontModePageRoutingModule
  ],
  declarations: [FrontModePage]
})
export class FrontModePageModule {}
