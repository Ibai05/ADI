import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',  // Redirige a la página de login cuando la app arranca
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'subtab1',
    loadChildren: () => import('./subtab1/subtab1.module').then(m => m.Subtab1PageModule)
  },
  {
    path: 'subtab2',
    loadChildren: () => import('./subtab2/subtab2.module').then(m => m.Subtab2PageModule)
  },
  {
    path: 'subtab3',
    loadChildren: () => import('./subtab3/subtab3.module').then(m => m.Subtab3PageModule)
  },
  {
    path: 'subtab4',
    loadChildren: () => import('./subtab4/subtab4.module').then(m => m.Subtab4PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) // Cambiado a TabsPageModule en lugar de LoginPageModule
  },
  {
    path: 'subtab5',
    loadChildren: () => import('./subtab5/subtab5.module').then(m => m.Subtab5PageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./detalle/detalle.module').then(m => m.DetallePageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then(m => m.BuscarPageModule)
  },
  {
    path: 'subtab6',
    loadChildren: () => import('./subtab6/subtab6.module').then(m => m.Subtab6PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
