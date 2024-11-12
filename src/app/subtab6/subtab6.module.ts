import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { Subtab6PageRoutingModule } from './subtab6-routing.module';

import { Subtab6Page } from './subtab6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    Subtab6PageRoutingModule
  ],
  declarations: [Subtab6Page]
})
export class Subtab6PageModule {}
