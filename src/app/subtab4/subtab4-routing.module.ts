import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab4Page } from './subtab4.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab4PageRoutingModule {}
