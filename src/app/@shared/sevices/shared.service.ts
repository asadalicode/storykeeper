import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _listner = new Subject<any>();
  constructor() {}

  listen(): Observable<any> {
    return this._listner.asObservable();
  }

  triggerMsg(event: boolean) {
    this._listner.next(event);
  }
}
