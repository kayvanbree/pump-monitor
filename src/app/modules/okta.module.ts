import { NgModule } from '@angular/core';

import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';
import {environment} from '../../environments/environment';

const oktaConfig = {
  issuer: environment.oktaOauth2Issuer,
  clientId: environment.oktaOauth2ClientIdSPA,
  redirectUri: window.location.origin + '/callback'
};

@NgModule({
  imports: [OktaAuthModule],
  exports: [OktaAuthModule],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ]
})
export class OktaModule { }
