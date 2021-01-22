import { Component, OnInit } from '@angular/core';
import {SolidService} from '../../ng-solid-client/services/solid.service';
import {Select, Store} from '@ngxs/store';
import {Login, Logout} from '../../store/actions/authentication.actions';
import {AuthenticationState} from '../../store/states/authentication-state.service';
import {AuthenticationStateModel} from '../../store/models/authentication-state.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  public loggedIn: boolean;

  @Select(AuthenticationState) authentication: Observable<AuthenticationStateModel>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    // this.loggedIn = this.solid.isLoggedIn();
    console.log(this.loggedIn);
  }

  public login(): void {
    this.store.dispatch(new Login());
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }
}
