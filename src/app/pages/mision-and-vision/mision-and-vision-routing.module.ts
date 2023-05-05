import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisionAndVisionPage } from './mision-and-vision.page';

const routes: Routes = [
  {
    path: '',
    component: MisionAndVisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisionAndVisionPageRoutingModule {}
