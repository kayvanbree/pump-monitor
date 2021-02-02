import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AuthenticationStateModel} from '../models/authentication-state.model';
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

@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    isAuthenticated: false,
  },
})
@Injectable()
export class AuthenticationState {
  constructor(private oktaAuth: OktaAuthService) {}

  @Action(InitializeAuthentication)
  public initializeAuthentication(ctx: StateContext<AuthenticationStateModel>, action: InitializeAuthentication): void {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean)  => {
        ctx.patchState({
          isAuthenticated,
        });
      }
    );
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
    // ctx.patchState({
    //   sessionId: action.info.sessionId,
    //   isLoggedIn: action.info.isLoggedIn,
    //   webId: action.info.webId,
    // });
    // if (action.info.isLoggedIn) {
    //   ctx.dispatch(new GetProfile());
    // }
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
