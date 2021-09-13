import { CurrencyListing } from '@currency-converter/api-interfaces';

export interface CurrencyPagination {
  count: number;
  next?: string;
  previous?: boolean;
  results: CurrencyListing[];
}