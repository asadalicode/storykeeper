import { catchError, map, Observable, of } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  get(url: any, dataModel?: any): Observable<any> {
    return this.http.get<any>(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map((item) => dataModel.adapt(item)))
    );
  }
  getDetails(url: any, dataModel?: any): Observable<any> {
    return this.http.get<any>(url).pipe(map((data: any[]) => dataModel.adapt(data)));
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

  delete(url: any): Observable<any> {
    return this.http.delete<any>(url);
  }
}
