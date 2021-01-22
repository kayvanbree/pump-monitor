import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AuthenticationStateModel} from '../models/authentication-state.model';
import {SolidService} from '../../ng-solid-client/services/solid.service';
import {HandleRedirect, Login, Logout, SetAuthenticationInfo} from '../actions/authentication.actions';
import {patch} from '@ngxs/store/operators';

@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: {
    sessionId: '',
    isLoggedIn: false,
    webId: '',
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
    this.solid.logout();
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
  }
}
