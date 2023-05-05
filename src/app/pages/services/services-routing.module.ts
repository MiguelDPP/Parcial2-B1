import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesPage } from './services.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesPage,
    children: [
      {
        path: 'salud',
        loadChildren: () => import('../services-tab/salud/salud.module').then( m => m.SaludPageModule)
      },
      {
        path: 'cultura',
        loadChildren: () => import('../services-tab/cultura/cultura.module').then( m => m.CulturaPageModule)
      },
      {
        path: 'deportes',
        loadChildren: () => import('../services-tab/deportes/deportes.module').then( m => m.DeportesPageModule)
      },
      {
        path: 'pebi',
        loadChildren: () => import('../services-tab/pebi/pebi.module').then( m => m.PebiPageModule)
      },
      {
        path: 'social',
        loadChildren: () => import('../services-tab/social/social.module').then( m => m.SocialPageModule)
      },
      {
        path: '',
        redirectTo: '/services/salud',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class ServicesPageRoutingModule {}
