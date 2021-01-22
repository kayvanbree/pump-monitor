export class Login {
  static readonly type = '[Auth] Login';
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class HandleRedirect {
  static readonly type = '[Auth] HandleRedirect';
}

export class SetAuthenticationInfo {
  static readonly type = '[Auth] SetAuthenticationInfo';
  constructor(public info) {}
}

export class GetProfile {
  static readonly type = '[Auth] GetProfile';
}

export class SetProfile {
  static readonly type = '[Auth] SetProfile';
  constructor(public profile) {}
}
