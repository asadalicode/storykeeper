import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
const IMG_URL: string = 'IMG_URL';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _listner = new Subject<any>();
  constructor() {}

  listen(): Observable<any> {
    return this._listner.asObservable();
  }

  setImgInStorage(url: string = '') {
    sessionStorage.setItem(IMG_URL, url);
  }
  getImgInStorage(): string {
    return sessionStorage.getItem(IMG_URL) || '';
  }

  triggerMsg(event: boolean) {
    this._listner.next(event);
  }
}
