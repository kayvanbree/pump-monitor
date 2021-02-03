import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {MarketStateModel} from '../models/market-state.model';
import {GetTickers} from '../actions/market.actions';

@State<MarketStateModel>({
  name: 'market',
  defaults: {
    tickers: null,
  }
})
@Injectable()
export class MarketState {
  @Action(GetTickers)
  public getTickers(ctx: StateContext<MarketStateModel>, action: GetTickers): void {

  }
}
