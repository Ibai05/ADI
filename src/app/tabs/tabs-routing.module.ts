import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
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
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
