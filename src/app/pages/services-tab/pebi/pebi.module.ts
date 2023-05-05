import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PebiPageRoutingModule } from './pebi-routing.module';

import { PebiPage } from './pebi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PebiPageRoutingModule
  ],
  declarations: [PebiPage]
})
export class PebiPageModule {}
