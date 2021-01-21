import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Solid Microblog`;

  constructor() {
    this.title = this.getTitle();
  }

  private getTitle(): string {
    return environment.herokuAppName === 'solid-microblog' ? 'Solid Microblog' : 'Solid Microblog - ' + environment.herokuAppName;
  }
}
