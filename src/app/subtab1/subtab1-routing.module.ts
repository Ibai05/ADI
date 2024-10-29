import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab1Page } from './subtab1.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab1PageRoutingModule {}
