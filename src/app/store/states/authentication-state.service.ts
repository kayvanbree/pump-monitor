import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AuthenticationStateModel} from '../models/authentication-state.model';
import {SolidService} from '../../ng-solid-client/services/solid.service';
import {GetProfile, HandleRedirect, Login, Logout, SetAuthenticationInfo, SetProfile} from '../actions/authentication.actions';
import {patch} from '@ngxs/store/operators';

@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    sessionId: '',
    isLoggedIn: false,
    webId: '',
    profile: null,
  },
})
@Injectable()
export class AuthenticationState {
  constructor(private solid: SolidService) {}

  @Action(Login)
  public login(ctx: StateContext<AuthenticationStateModel>, action: Login): void {
    this.solid.login();
  }

  @Action(Logout)
  public logout(ctx: StateContext<AuthenticationStateModel>, action: Logout): void {
    this.solid.logout().then(() => {
      ctx.patchState({
        sessionId: '',
        isLoggedIn: false,
        webId: '',
      });
    });
  }

  @Action(HandleRedirect)
  public handleRedirect(ctx: StateContext<AuthenticationStateModel>, action: HandleRedirect): void {
    this.solid.handleRedirect().then(value => {
      ctx.dispatch(new SetAuthenticationInfo(value));
    });
  }

  @Action(SetAuthenticationInfo)
  public setAuthenticationInfo(ctx: StateContext<AuthenticationStateModel>, action: SetAuthenticationInfo): void {
    ctx.patchState({
      sessionId: action.info.sessionId,
      isLoggedIn: action.info.isLoggedIn,
      webId: action.info.webId,
    });
    if (action.info.isLoggedIn) {
      ctx.dispatch(new GetProfile());
    }
  }

  @Action(GetProfile)
  public getProfile(ctx: StateContext<AuthenticationStateModel>, action: GetProfile): void {
    this.solid.getProfile().then(value => {
      ctx.dispatch(new SetProfile(value));
    });
  }

  @Action(SetProfile)
  public setProfile(ctx: StateContext<AuthenticationStateModel>, action: SetProfile): void {
    ctx.patchState({
      profile: action.profile,
    });
  }
}
