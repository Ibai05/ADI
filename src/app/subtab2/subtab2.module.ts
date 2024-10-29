import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab2PageRoutingModule } from './subtab2-routing.module';

import { Subtab2Page } from './subtab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab2PageRoutingModule
  ],
  declarations: [Subtab2Page]
})
export class Subtab2PageModule {}
