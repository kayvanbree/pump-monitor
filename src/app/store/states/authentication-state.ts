import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {OktaState} from '../entities/okta-state';
import {
  GetProfile,
  InitializeAuthentication,
  Login,
  Logout,
  SetAuthenticationInfo, SetProfile,
} from '../actions/authentication.actions';
import {OktaAuthService} from '@okta/okta-angular';
import {AuthenticationStateModel} from '../models/authentication-state.model';
import {UserClaims} from '@okta/okta-auth-js/lib/types';

@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    isAuthenticated: false,
    isPending: false,
    userClaims: null,
  },
})
@Injectable()
export class AuthenticationState {
  constructor(private oktaAuth: OktaAuthService) {
  }

  @Action(InitializeAuthentication)
  public initializeAuthentication(ctx: StateContext<AuthenticationStateModel>, action: InitializeAuthentication): void {
    this.oktaAuth.authStateManager.subscribe((authState: OktaState) => {
        ctx.dispatch(new SetAuthenticationInfo(authState));
    });
  }

  @Action(Login)
  public login(ctx: StateContext<AuthenticationStateModel>, action: Login): void {
    this.oktaAuth.signInWithRedirect({
      originalUri: '/dashboard'
    });
  }

  @Action(Logout)
  public logout(ctx: StateContext<AuthenticationStateModel>, action: Logout): void {
    this.oktaAuth.signOut({
      postLogoutRedirectUri: `${window.location.protocol}//${window.location.host}`,
    });
  }

  @Action(SetAuthenticationInfo)
  public setAuthenticationInfo(ctx: StateContext<AuthenticationStateModel>, action: SetAuthenticationInfo): void {
    ctx.patchState({
      isPending: action.authState.isPending,
      isAuthenticated: action.authState.isAuthenticated,
      accessToken: action.authState.accessToken ? action.authState.accessToken.value : null,
      idToken: action.authState.idToken ? action.authState.idToken.value : null,
      error: action.authState.error ? action.authState.error.value : null,
    });
    ctx.dispatch(new GetProfile());
  }

  @Action(GetProfile)
  public getProfile(ctx: StateContext<AuthenticationStateModel>, action: GetProfile): void {
    this.oktaAuth.getUser().then((userClaims: UserClaims) => {
      ctx.dispatch(new SetProfile(userClaims));
    });
  }

  @Action(SetProfile)
  public setProfile(ctx: StateContext<AuthenticationStateModel>, action: SetProfile): void {
    ctx.patchState({
      userClaims: action.userClaims,
    });
  }
}
