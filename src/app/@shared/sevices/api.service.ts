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

  postFormData(url: any, dataModel: any): Observable<any> {
    let fd = new FormData();
    for (var i in dataModel) {
      fd.append(i, dataModel[i]);
    }
    return this.http.post<any>(url, fd);
  }

  put(url: any, dataModel: any): Observable<any> {
    return this.http.put<any>(url, dataModel);
  }
}
