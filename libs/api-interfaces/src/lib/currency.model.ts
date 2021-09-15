export interface CurrencyListing {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: { [key: string]: any };
}

export const emptyCurrencyListing = {
  success: false,
  timestamp: 0,
  base: '',
  date: '',
  rates: [],
};

export type CurrencyRates = CurrencyRate[];

export interface CurrencyRate {
  rate: string;
  value: string;
}
