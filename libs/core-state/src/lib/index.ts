import { ActionReducerMap } from "@ngrx/store";
import * as fromCurrencyListing from './currencies/currencies.reducer';

export interface AppState {
    [fromCurrencyListing.CURRENCY_FEATURE_KEY]: fromCurrencyListing.CurrencyListingState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromCurrencyListing.CURRENCY_FEATURE_KEY]: fromCurrencyListing.currencyListingReducer
};