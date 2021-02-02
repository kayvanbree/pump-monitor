import {OktaState} from '../entities/okta-state';

export interface AuthenticationStateModel {
  isPending: boolean;
  isAuthenticated: boolean;
  accessToken?: string;
  idToken?: string;
  error?: string;
}
