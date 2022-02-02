import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}
export interface SignUpContext {
  username: string;
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
  constructor(private credentialsService: CredentialsService) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call
    const data = {
      username: context.username,
      token: '123456',
    };
    this.credentialsService.setCredentials(data, context.remember);
    return of(data);
  }

  signup(context: SignUpContext): Observable<Credentials> {
    // Replace by proper authentication call
    const data = {
      username: context.username,
      password: context.password,
      token: '123456',
    };
    this.credentialsService.setCredentials(data, true);
    return of(data);
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
