import {UserClaims} from '@okta/okta-auth-js/lib/types';

export interface AuthenticationStateModel {
  isPending: boolean;
  isAuthenticated: boolean;
  accessToken?: string;
  idToken?: string;
  error?: string;
  userClaims?: UserClaims;
}
