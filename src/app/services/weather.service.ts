import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WeatherService {
    private cityNameSource = new BehaviorSubject<string>("");
    currentCityName = this.cityNameSource.asObservable();

    changeCityName(cityName: string) {
        this.cityNameSource.next(cityName);
    }
    constructor(private httpClient: HttpClient) {

    }
    getWeatherByCity(cityName: string) {
        debugger;
        return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName);
    }
}