import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'subtab1',
        loadChildren: () => import('../subtab1/subtab1.module').then(m => m.Subtab1PageModule)
      },
      {
        path: 'subtab2',
        loadChildren: () => import('../subtab2/subtab2.module').then(m => m.Subtab2PageModule)
      },
      {
        path: 'subtab3',
        loadChildren: () => import('../subtab3/subtab3.module').then(m => m.Subtab3PageModule)
      },
      {
        path: 'subtab4',
        loadChildren: () => import('../subtab4/subtab4.module').then(m => m.Subtab4PageModule)
      },
      {
        path: 'subtab5',
        loadChildren: () => import('../subtab5/subtab5.module').then(m => m.Subtab5PageModule)
      },
      {
        path: '',
        redirectTo: 'subtab1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
