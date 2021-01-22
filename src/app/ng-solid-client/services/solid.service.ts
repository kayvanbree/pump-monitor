import { Injectable } from '@angular/core';
import { Session } from '@inrupt/solid-client-authn-browser';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolidService {
  private session;



  constructor() {
    this.session = new Session();
  }

  /**
   * Start the login process
   */
  public login(): void {
    if (!this.session.info.isLoggedIn) {
      this.session.login({
        oidcIssuer: environment.solidOidcIssuer,
        redirectUrl: window.location.href
      });
    }
  }

  public logout(): void {
    this.session.logout();
  }

  /**
   * Handle the redirect after logging in
   */
  public async handleRedirect(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      await this.session.handleIncomingRedirect(window.location.href);
      resolve(this.session.info);
    });
  }

  /**
   * Returns whether or not the user is logged in
   */
  public isLoggedIn(): boolean {
    return this.session.info.isLoggedIn;
  }
}
