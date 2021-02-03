import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {MarketStateModel} from '../../store/models/market-state.model';
import {Observable} from 'rxjs';
import {GetTickers} from '../../store/actions/market.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Select(state => state.markets) public marketState: Observable<MarketStateModel>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTickers());
  }
}
