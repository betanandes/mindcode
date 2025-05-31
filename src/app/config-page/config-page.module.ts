import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigPagePageRoutingModule } from './config-page-routing.module';

import { ConfigPagePage } from './config-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigPagePageRoutingModule
  ],
  declarations: [ConfigPagePage]
})
export class ConfigPagePageModule {}
