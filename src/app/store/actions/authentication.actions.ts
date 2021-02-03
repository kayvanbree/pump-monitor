import {OktaState} from '../entities/okta-state';
import {UserClaims} from '@okta/okta-auth-js/lib/types';

export class Login {
  static readonly type = '[Auth] Login';
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class InitializeAuthentication {
  static readonly type = '[Auth] InitializeAuthentication';
}

export class SetAuthenticationInfo {
  static readonly type = '[Auth] SetAuthenticationInfo';
  constructor(public authState: OktaState) {}
}

export class GetProfile {
  static readonly type = '[Auth] GetProfile';
}

export class SetProfile {
  static readonly type = '[Auth] SetProfile';
  constructor(public userClaims: UserClaims) {}
}
