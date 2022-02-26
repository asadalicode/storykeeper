import { catchError, map, Observable, of } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  get(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  post(url: any, dataModel: any): Observable<any> {
    return this.http.post<any>(url, dataModel);
  }

  put(url: any, dataModel: any): Observable<any> {
    return this.http.put<any>(url, dataModel);
  }
}
