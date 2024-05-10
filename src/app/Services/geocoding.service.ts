import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
// Geocoding service to get coordinates of the city
export class GeocodingService {
  constructor(public http: HttpClient) {}

  // Get geocoding data of the city
  getGeocoding(city: string): Observable<any> {
    let apiKey = 'dbffb70fb3dfd81fff0a092521308019'; // API key
    let apiCall = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`; // API call
    return this.http.get(apiCall);
  }
}