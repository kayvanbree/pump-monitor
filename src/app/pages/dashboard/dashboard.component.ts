import { Component, OnInit } from '@angular/core';
import {Select} from '@ngxs/store';
import {MarketStateModel} from '../../store/models/market-state.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Select(state => state.markets) public marketState: Observable<MarketStateModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
