import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab5PageRoutingModule } from './subtab5-routing.module';

import { Subtab5Page } from './subtab5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab5PageRoutingModule
  ],
  declarations: [Subtab5Page]
})
export class Subtab5PageModule {}
