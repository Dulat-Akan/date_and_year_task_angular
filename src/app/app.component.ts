import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTimeObj;
  date: string;
  year: string;

  constructor(private service: ApiService) {
    this.date = '';
    this.year = '';
  }

  ngOnInit() {
    // assign API response to dateTimeObj on loading of application
  }

  getDateTime() {
    var datess = this.service.getDateTimeAPI();
    this.date = String(datess.getDate());
    this.year = String(datess.getFullYear());
    // Use this function to parse the date returned by the API upon button click
  }
}
