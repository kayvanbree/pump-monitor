import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {BinanceExchangeInfo} from '../entities/binance-exchange-info';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  constructor(private http: HttpClient) { }

  public getMarketInfo(): Observable<BinanceExchangeInfo> {
    return this.http.get<BinanceExchangeInfo>(`${environment.apiBaseUrl}/system/marketinfo`);
  }
}
