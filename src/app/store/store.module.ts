import { NgModule } from '@angular/core';
import {environment} from '../../environments/environment';
import {NgxsModule} from '@ngxs/store';
import {AuthenticationState} from './states/authentication-state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {MarketState} from './states/market-state';

const states = [
  AuthenticationState,
  MarketState,
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
