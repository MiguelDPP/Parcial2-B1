import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'mision-and-vision',
    loadChildren: () => import('./pages/mision-and-vision/mision-and-vision.module').then( m => m.MisionAndVisionPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant-tab/restaurant-tab.module').then( m => m.RestaurantTabPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./pages/services-tab/salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'cultura',
    loadChildren: () => import('./pages/services-tab/cultura/cultura.module').then( m => m.CulturaPageModule)
  },
  {
    path: 'deportes',
    loadChildren: () => import('./pages/services-tab/deportes/deportes.module').then( m => m.DeportesPageModule)
  },
  {
    path: 'pebi',
    loadChildren: () => import('./pages/services-tab/pebi/pebi.module').then( m => m.PebiPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./pages/services-tab/social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'restaurant-tab',
    loadChildren: () => import('./pages/restaurant-tab/restaurant-tab.module').then( m => m.RestaurantTabPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
