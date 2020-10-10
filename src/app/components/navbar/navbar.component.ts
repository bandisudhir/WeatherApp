import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/services/weather.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    searchCity: string;

    constructor(private weatherService: WeatherService) {
    }

    ngOnInit() {
    }
    SearchCityWeather() {
        this.weatherService.changeCityName(this.searchCity);
    }
}
