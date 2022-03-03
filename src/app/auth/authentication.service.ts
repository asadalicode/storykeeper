import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { HttpClient } from '@angular/common/http';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}
export interface SignUpContext {
  email: string;
  password: string;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private http: HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    return this.http.post<any>(`/api/Authentication/Login`, context).pipe(
      map((data) => {
        this.credentialsService.setCredentials(data, context.remember);
        return data;
      })
    );
  }

  signup(context: SignUpContext): Observable<Credentials> {
    // Replace by proper authentication call
    const data = {
      email: context.email,
      password: context.password,
      firstName: '-',
      lastName: '-',
      // birthDate:'',
      role: 'Administrator',
    };
    return this.http.post<any>(`/api/Users`, data).pipe(
      map((data) => {
        return data;
      })
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    GoogleAuth.signOut();
    this.credentialsService.setCredentials();
    return of(true);
  }
}
