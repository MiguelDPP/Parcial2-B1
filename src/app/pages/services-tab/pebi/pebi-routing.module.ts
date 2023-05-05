import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PebiPage } from './pebi.page';

const routes: Routes = [
  {
    path: '',
    component: PebiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PebiPageRoutingModule {}
