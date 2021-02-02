import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {OktaState} from '../entities/okta-state';
import {
  GetProfile,
  HandleRedirect,
  InitializeAuthentication,
  Login,
  Logout,
  SetAuthenticationInfo,
  SetProfile
} from '../actions/authentication.actions';
import {OktaAuthService} from '@okta/okta-angular';
import {AuthenticationStateModel} from '../models/authentication-state.model';

@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    isAuthenticated: false,
    isPending: false,
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
      originalUri: '/profile'
    });
  }

  @Action(Logout)
  public logout(ctx: StateContext<AuthenticationStateModel>, action: Logout): void {
    this.oktaAuth.signOut({
      postLogoutRedirectUri: `http://${location.host}`,
    });
  }

  @Action(HandleRedirect)
  public handleRedirect(ctx: StateContext<AuthenticationStateModel>, action: HandleRedirect): void {
    // this.solid.handleRedirect().then(value => {
    //   ctx.dispatch(new SetAuthenticationInfo(value));
    // });
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
  }

  @Action(GetProfile)
  public getProfile(ctx: StateContext<AuthenticationStateModel>, action: GetProfile): void {
    // this.solid.getProfile().then(value => {
    //   ctx.dispatch(new SetProfile(value));
    // });
  }

  @Action(SetProfile)
  public setProfile(ctx: StateContext<AuthenticationStateModel>, action: SetProfile): void {
    // ctx.patchState({
    //   profile: action.profile,
    // });
  }
}
