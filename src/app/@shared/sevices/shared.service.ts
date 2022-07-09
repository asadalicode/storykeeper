import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
const IMG_URL: string = 'IMG_URL';
const AUDIO_URL: string = 'AUDIO_URL';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _listner = new Subject<any>();
  private _AUDIO_URL = new BehaviorSubject<any>('');
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

  setAudioInStorage(url: any) {
    this._AUDIO_URL.next(url);
  }
  getAudioInStorage(): Observable<any> {
    return this._AUDIO_URL.asObservable();
  }

  triggerMsg(event: boolean) {
    this._listner.next(event);
  }
}
