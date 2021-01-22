import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {HandleRedirect} from './store/actions/authentication.actions';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = environment.herokuAppName;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(new HandleRedirect());
  }
}
