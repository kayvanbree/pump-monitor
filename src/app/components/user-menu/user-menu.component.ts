import { Component, OnInit } from '@angular/core';
import {SolidService} from '../../ng-solid-client/services/solid.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private solid: SolidService) {}

  public ngOnInit(): void {
    this.loggedIn = this.solid.isLoggedIn();
    console.log(this.loggedIn);
  }

  public login(): void {
    this.solid.login();
  }
}
