//Weather-Current Folder Adapted from https://github.com/AllenConway/PWAWeatherApp
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherCurrentComponent } from './weather-current.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherCurrentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherCurrentRoutingModule { }