import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger } from '../logger.service';
import { ToastService } from '@app/@shared/sevices/toast.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      log.error('Request error', response);
    }
    let error: any = response;
    if (error.status == 201) {
      this.toastService.showToast('success', 'Request successfull');
    }

    if (error.status != 201) {
      // if (error.error == null) {
      //   this.toastService.showToast('error', error?.message);
      // }
      // if (typeof error.error.error == 'string') {
      //   this.toastService.showToast('error', error?.error?.error);
      // }
      // if (typeof error.error == 'string') {
      //   this.toastService.showToast('error', error?.error);
      // } else if (typeof error.error.errorMessage == 'string') {
      //   this.toastService.showToast('error', error?.error?.errorMessage);
      // } else if (error.error.isSuccess == false) {
      //   this.toastService.showToast('error', error?.error?.error);
      // } else if (error.error.responseMessage) {
      //   this.toastService.showToast('error', error?.error?.responseMessage);
      // } else {
      //   this.toastService.showToast('error', error?.message);
      // }
    }

    throw response;
  }
}
