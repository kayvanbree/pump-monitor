import {Ticker} from './ticker';

export interface BinanceExchangeInfo {
  exchangeFilters: any[];
  rateLimits: any[];
  serverTime: Date;
  symbols: Ticker[];
  timeZone: string;
}
