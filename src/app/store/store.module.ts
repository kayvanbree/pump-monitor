import { NgModule } from '@angular/core';
import {environment} from '../../environments/environment';
import {NgxsModule} from '@ngxs/store';
import {AuthenticationState} from './states/authentication-state.service';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

const states = [
  AuthenticationState,
];

const settings = {
  developmentMode: !environment.production,
};

@NgModule({
  imports: [
    NgxsModule.forRoot(states, settings),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
})
export class StoreModule { }
