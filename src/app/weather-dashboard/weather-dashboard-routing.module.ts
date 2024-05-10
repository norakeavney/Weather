import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDashboardComponent } from './weather-dashboard.component';
import { WeatherCurrentModule } from '../weather-current/weather-current.module';
const routes: Routes = [
  {
    path: 'weather',
    component: WeatherDashboardComponent,
    children: [
      {
        path: 'current',
        loadChildren: () => import('../weather-current/weather-current.module').then(m => m.WeatherCurrentModule)
      },
      {
        path: '',
        redirectTo: '/weather/current',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/weather/current',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherDashboardRoutingModule { }