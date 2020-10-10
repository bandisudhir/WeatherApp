import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherData: any;
  today: number = Date.now();
  searchMessage: string = "Please enter valid city name";
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.currentCityName.subscribe(res => {
      this._weatherService.getWeatherByCity(res).subscribe(response => {
        this.weatherData = response;
        console.log(response);
      },
        error => {
          if (error.error.message != 'Nothing to geocode') {
            this.weatherData = null;
            this.searchMessage = error.error.message;
            console.log(error.error.message);
          }
        })
    })
  }
  GetTimeinTimezone(offset: any) {
    // get current local time in milliseconds
    var date = new Date();
    var localTime = date.getTime();
    // get local timezone offset and convert to milliseconds
    var localOffset = date.getTimezoneOffset() * 60000;
    // obtain the UTC time in milliseconds
    var utc = localTime + localOffset;
    var newDateTime = utc + (3600000 * offset / 3600);
    var convertedDateTime = new Date(newDateTime);
    return convertedDateTime.toLocaleString();
  }

}
