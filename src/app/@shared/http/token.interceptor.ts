import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
const credentialsKey = 'storybook_credentials';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    let token: string = '';
    if (savedCredentials) {
      const credentials = JSON.parse(savedCredentials);
      token = credentials['token'];
    }

    if (token) {
      let t = '';
      if (!req.url.includes('s3.amazonaws.com')) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            // Authorization: token
          },
        });
      }
    }

    return next.handle(req);
  }
}
