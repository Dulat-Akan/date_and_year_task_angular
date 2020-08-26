import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { catchError, map, tap, timeout } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }



  getDateTimeAPI() {
    // Call the API and return the response (change the code below)
    return new Date();
  }
}
