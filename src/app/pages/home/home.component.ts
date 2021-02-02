import { Component } from '@angular/core';
import {Store} from '@ngxs/store';
import {Login} from '../../store/actions/authentication.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private store: Store) { }

  public login(): void {
    this.store.dispatch(new Login());
  }
}
