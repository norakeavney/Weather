import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherDashboardRoutingModule } from './weather-current-routing.model';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WeatherDashboardComponent } from './weather-current.component';


@NgModule({
  declarations: [WeatherDashboardComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WeatherDashboardRoutingModule,
    WeatherDashboardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeatherDashboardModule { }