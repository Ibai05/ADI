import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab3Page } from './subtab3.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab3PageRoutingModule {}
