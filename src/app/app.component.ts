import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {SolidService} from './ng-solid-client/services/solid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = environment.herokuAppName;
}
