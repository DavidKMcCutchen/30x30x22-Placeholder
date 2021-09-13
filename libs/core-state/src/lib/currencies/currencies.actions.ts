import { createAction, props } from "@ngrx/store";
import {  CurrencyListing } from "@currency-converter/api-interfaces";

// Select Entity

export const selectCurrencyListing = createAction(
    '[CURRENCY] Select CurrencyListing',
    props<{ currencyListingId: string }>()
);

// Load all Entities

export const loadCurrencyListings = createAction(
    '[CURRENCY] Load CurrencyListings'
);

export const loadCurrencyListingsSuccess = createAction(
    '[CURRENCY] Load CurrencyListings Success',
    props<{ currencyListings: CurrencyListing[]}>()
);

export const loadCurrencyListingsFailed = createAction(
    '[CURRENCY] Load CurrencyListings Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadCurrencyListing = createAction(
    '[CURRENCY] Load CurrencyListing',
    props<{ currencyListingId: string}>()
);

export const loadCurrencyListingSuccess = createAction(
    '[CURRENCY] Load CurrencyListing Success',
    props<{ currencyListing: CurrencyListing}>()
);

export const loadCurrencyListingFailed = createAction(
    '[CURRENCY] Load CurrencyListing Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createCurrencyListing = createAction(
    '[CURRENCY] Create CurrencyListing',
    props<{ currencyListing: CurrencyListing}>()
);

export const createCurrencyListingSuccess = createAction(
    '[CURRENCY] Create CurrencyListing Success',
    props<{ currencyListing: CurrencyListing}>()
);

export const createCurrencyListingFailed = createAction(
    '[CURRENCY] Create CurrencyListing Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateCurrencyListing = createAction(
    '[CURRENCY] Update CurrencyListing',
    props<{ currencyListing: CurrencyListing}>()
);

export const updateCurrencyListingSuccess = createAction(
    '[CURRENCY] Update CurrencyListing Success',
    props<{ currencyListing: CurrencyListing}>()
);

export const updateCurrencyListingFailed = createAction(
    '[CURRENCY] Create CurrencyListing Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteCurrencyListing = createAction(
    '[CURRENCY] Delete CurrencyListing',
    props<{ currencyListing: CurrencyListing}>()
);

export const deleteCurrencyListingSuccess = createAction(
    '[CURRENCY] Delete CurrencyListing Success',
    props<{ currencyListing: CurrencyListing}>()
);

export const deleteCurrencyListingFailed = createAction(
    '[CURRENCY] Create CurrencyListing Failed',
    props<{ error: any}>()
);