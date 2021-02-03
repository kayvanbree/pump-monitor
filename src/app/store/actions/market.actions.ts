import {Ticker} from '../entities/ticker';

export class GetMarketInfo {
  static readonly type = '[Markets] GetMarketInfo';
}

export class SetTickers {
  static readonly type = '[Market] SetTickers';
  constructor(public tickers: Ticker[]) {}
}
