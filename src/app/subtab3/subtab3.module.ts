import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab3PageRoutingModule } from './subtab3-routing.module';

import { Subtab3Page } from './subtab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab3PageRoutingModule
  ],
  declarations: [Subtab3Page]
})
export class Subtab3PageModule {}
