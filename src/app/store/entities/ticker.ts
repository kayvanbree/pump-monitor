export interface Ticker {
  baseAsset: string;
  baseAssetPrecision: number;
  baseCommissionPrecision: number;
  filters: any[];
  iceBergAllowed: boolean;
  iceBergPartsFilter: any;
  isMarginTradingAllowed: boolean;
  isSpotTradingAllowed: boolean;
  lotSizeFilter: any;
  marketLotSizeFilter: any;
  maxAlgorithmicOrdersFilter: any;
  maxOrdersFilter: any;
  maxPositionFilter?: any;
  minNOtionalFilter: any;
  name: string;
  ocoAllowed: boolean;
  orderTypes: number[];
  permissions: number[];
  priceFilter: any;
  pricePercentFilter: any;
  quoteAsset: string;
  quoteAssetPrecision: number;
  quoteCommissionPrecision: number;
  quoteOrderQuantityMarketAllowed: boolean;
  status: number;
}
