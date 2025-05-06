import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=cbhwGBMIA1HZMbSw55iQZoq8ag9J5MQWTDQTEQIp&thumbs=true';

  constructor(private http: HttpClient) {}

  getNasa(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
