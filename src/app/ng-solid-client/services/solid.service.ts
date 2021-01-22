import { Injectable } from '@angular/core';
import { Session } from '@inrupt/solid-client-authn-browser';
import {environment} from '../../../environments/environment';
import {getSolidDataset, getStringNoLocale, getThing, Thing} from '@inrupt/solid-client';
import {VCARD} from '@inrupt/vocab-common-rdf';
import {Profile} from '../../store/entities/profile';

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

  public async logout(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.session.logout();
      resolve(true);
    });
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

  /**
   * Retrieve the user's profile
   */
  public async getProfile(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const profileData = await this.getPrivateDataSet(this.session.info.webId);
      const profile = {
        name: getStringNoLocale(profileData, VCARD.fn)
      } as Profile;
      resolve(profile);
    });
  }

  private getPublicDataSet(resource): Promise<Thing> {
    return new Promise(async (resolve, reject) => {
      getSolidDataset(resource, {
        fetch: this.session.fetch,
      }).then(value => {
        const data = getThing(value, resource);
        resolve(data);
      });
    });
  }

  private getPrivateDataSet(resource): Promise<Thing> {
    return new Promise(async (resolve, reject) => {
      getSolidDataset(resource).then(value => {
        const data = getThing(value, resource);
        resolve(data);
      });
    });
  }
}
