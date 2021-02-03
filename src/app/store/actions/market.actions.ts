export class GetTickers {
  static readonly type = '[Markets] GetTickers';
}

export class SetTickers {
  static readonly type = '[Market] SetTickers';
  constructor(public tickers: string[]) {}
}
