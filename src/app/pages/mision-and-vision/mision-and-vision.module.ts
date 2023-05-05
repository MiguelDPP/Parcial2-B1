import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisionAndVisionPageRoutingModule } from './mision-and-vision-routing.module';

import { MisionAndVisionPage } from './mision-and-vision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisionAndVisionPageRoutingModule
  ],
  declarations: [MisionAndVisionPage]
})
export class MisionAndVisionPageModule {}
