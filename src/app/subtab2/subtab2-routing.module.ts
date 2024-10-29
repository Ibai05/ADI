import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab2Page } from './subtab2.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab2PageRoutingModule {}
