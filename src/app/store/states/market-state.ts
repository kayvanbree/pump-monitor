import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {MarketStateModel} from '../models/market-state.model';
import {GetMarketInfo, SetTickers} from '../actions/market.actions';
import {MarketService} from '../services/market.service';

@State<MarketStateModel>({
  name: 'market',
  defaults: {
    tickers: [],
  }
})
@Injectable()
export class MarketState {
  constructor(private marketService: MarketService) {}

  @Action(GetMarketInfo)
  public getTickers(ctx: StateContext<MarketStateModel>, action: GetMarketInfo): void {
    this.marketService.getMarketInfo().subscribe((value: any) => {
      ctx.dispatch(new SetTickers(value.data.symbols));
    });
  }

  @Action(SetTickers)
  public setTickers(ctx: StateContext<MarketStateModel>, action: SetTickers): void {
    ctx.patchState({
      tickers: action.tickers,
    });
  }
}
