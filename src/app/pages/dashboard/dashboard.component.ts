import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {MarketStateModel} from '../../store/models/market-state.model';
import {Observable} from 'rxjs';
import {GetMarketInfo} from '../../store/actions/market.actions';
import {AuthenticationStateModel} from '../../store/models/authentication-state.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Select(state => state.market) public marketState: Observable<MarketStateModel>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(state => state.authentication).subscribe((state: AuthenticationStateModel) => {
      if (state.accessToken) {
        this.refreshTickers();
      }
    });
  }

  refreshTickers(): void {
    this.store.dispatch(new GetMarketInfo());
  }
}
