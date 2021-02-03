import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Login, Logout} from '../../store/actions/authentication.actions';
import {AuthenticationState} from '../../store/states/authentication-state';
import {AuthenticationStateModel} from '../../store/models/authentication-state.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  @Select(AuthenticationState) authentication: Observable<AuthenticationStateModel>;

  constructor(private store: Store) {}

  public login(): void {
    this.store.dispatch(new Login());
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }
}
