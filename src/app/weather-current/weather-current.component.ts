import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../Services/weather.service';
import { CurrentWeather } from '../Models/current-weather.model';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.scss'],
})
export class WeatherCurrentComponent implements OnInit {

  private subscriptions = new Subscription()
  private readonly weatherCityNameStorageKey: string = "weatherCityName";
  
  coordinates: any = "";
  lat: string = "";
  long: String = "";

  public weatherData: CurrentWeather | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.subscriptions.add(this.weatherService.getCurrentWeather$.subscribe((data: CurrentWeather) => this.onGetCurrentWeather(data)));
  }

  onGetCurrentWeather(data: CurrentWeather) {
    localStorage.setItem(this.weatherCityNameStorageKey, JSON.stringify(data?.name));
    this.weatherData = data;
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

  async getGPS(){
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitiude;
    this.long = this.coordinates.coords.longitude;
}
}
