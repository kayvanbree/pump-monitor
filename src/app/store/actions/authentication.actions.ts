import {OktaState} from '../entities/okta-state';

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
