import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab6Page } from './subtab6.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab6PageRoutingModule {}
