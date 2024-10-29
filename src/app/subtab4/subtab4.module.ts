import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab4PageRoutingModule } from './subtab4-routing.module';

import { Subtab4Page } from './subtab4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab4PageRoutingModule
  ],
  declarations: [Subtab4Page]
})
export class Subtab4PageModule {}
