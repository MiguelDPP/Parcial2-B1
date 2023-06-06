import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantTabPageRoutingModule } from './restaurant-tab-routing.module';

import { RestaurantTabPage } from './restaurant-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantTabPageRoutingModule
  ],
  declarations: [RestaurantTabPage]
})
export class RestaurantTabPageModule {}
