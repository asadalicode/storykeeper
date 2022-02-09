import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'assets/json-data/books' + '.json');
  }
}
