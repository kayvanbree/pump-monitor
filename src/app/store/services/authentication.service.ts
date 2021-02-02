import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

const MINIMUM_CODE_VERIFIER_LENGTH = 43;
const RESPONSE_TYPE = 'code';
const SCOPE = 'openid';
const STATE_STUFF = 'asdf-asdf-asdf-asdf'; // This should be random or something?

/**
 * Following https://developer.okta.com/docs/guides/implement-auth-code-pkce/use-flow/
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {}

  /**
   * Start the login process
   */
  public login(): void {
    const url = `${environment.oktaBaseUrl}/authorize?client_id=${environment.oktaClientId}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&redirect_uri=${environment.oktaRedirectUri}&state=${STATE_STUFF}`;
    window.location.href = url;
  }
}
