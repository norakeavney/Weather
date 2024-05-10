import { Component, OnDestroy, OnInit } from '@angular/core';
import {GeocodingService } from '../Services/geocoding.service';
import { WeatherService } from '../Services/weather.service';
import { Subscription } from 'rxjs';
import { SwUpdate, VersionDetectedEvent, VersionEvent, VersionReadyEvent } from '@angular/service-worker';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent implements OnInit {

  private subscriptions = new Subscription()
  public weatherData: any;

  constructor(private weatherService: WeatherService, private geonamesService: GeocodingService, private swUpdate: SwUpdate) { }

  ngOnInit() {
  }

  
  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Latitude:', position.coords.latitude);
          console.log('Longitude:', position.coords.longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}

