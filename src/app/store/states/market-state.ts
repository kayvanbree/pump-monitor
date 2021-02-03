import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {MarketStateModel} from '../models/market-state.model';
import {GetTickers, SetTickers} from '../actions/market.actions';
import {MarketService} from '../services/market.service';

@State<MarketStateModel>({
  name: 'market',
  defaults: {
    tickers: null,
  }
})
@Injectable()
export class MarketState {
  constructor(private marketService: MarketService) {}

  @Action(GetTickers)
  public getTickers(ctx: StateContext<MarketStateModel>, action: GetTickers): void {
    this.marketService.getTickers().subscribe((value: string[]) => {
      ctx.dispatch(new SetTickers(value));
    });
  }

  @Action(SetTickers)
  public setTickers(ctx: StateContext<MarketStateModel>, action: SetTickers): void {
    ctx.patchState({
      tickers: action.tickers,
    });
  }
}
