import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  constructor(private http: HttpClient) { }

  public getMarketInfo(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiBaseUrl}/system/marketinfo`);
  }
}
