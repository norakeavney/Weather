import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Weather service to get weather data from the specific coordinates
export class WeatherService {
  getCurrentWeather$: any;
  constructor(public http: HttpClient) {}

  // Get weather data from the coordinates
  getWeatherData(lat: number, lon: number): Observable<any> {
    let apiKey = 'd0ac9e1f6578b3711de227dcde68e505'; // API key
    let apiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`; // API caall
    return this.http.get(apiCall);
  }
}