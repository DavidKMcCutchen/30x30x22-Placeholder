import { createAction, props } from "@ngrx/store";
import { CurrencyRate, CurrencyRates } from "@currency-converter/api-interfaces";

// Select Entity

export const selectCurrencyListing = createAction(
    '[CURRENCY] Select CurrencyListing',
    props<{ currencyRatesId: string | number }>()
);

// Load all Entities

export const loadCurrencyListings = createAction(
    '[CURRENCY] Load Currency Data'
);

export const loadCurrencyListingsSuccess = createAction(
    '[CURRENCY] Load Currency Data Success',
    props<{ currencyRates: CurrencyRate[]}>()
);

export const loadCurrencyListingsFailed = createAction(
    '[CURRENCY] Load Currency Data Failed',
    props<{ error: any }>()
);

// Load Single Entity

// export const loadCurrencyListing = createAction(
//     '[CURRENCY] Load CurrencyListing',
//     props<{ currencyRatesId: string}>()
// );

// export const loadCurrencyListingSuccess = createAction(
//     '[CURRENCY] Load CurrencyListing Success',
//     props<{ currencyRates: CurrencyRates}>()
// );

// export const loadCurrencyListingFailed = createAction(
//     '[CURRENCY] Load CurrencyListing Failed',
//     props<{ error: any}>()
// );

// // Load Create Entity

// export const createCurrencyListing = createAction(
//     '[CURRENCY] Create CurrencyListing',
//     props<{ currencyRates: CurrencyRates}>()
// );

// export const createCurrencyListingSuccess = createAction(
//     '[CURRENCY] Create CurrencyListing Success',
//     props<{ currencyRates: CurrencyRates}>()
// );

// export const createCurrencyListingFailed = createAction(
//     '[CURRENCY] Create CurrencyListing Failed',
//     props<{ error: any}>()
// );

// // Load Update Entity

// export const updateCurrencyListing = createAction(
//     '[CURRENCY] Update CurrencyListing',
//     props<{ currencyRates: CurrencyRates}>()
// );

// export const updateCurrencyListingSuccess = createAction(
//     '[CURRENCY] Update CurrencyListing Success',
//     props<{ currencyRates: CurrencyRates}>()
// );

// export const updateCurrencyListingFailed = createAction(
//     '[CURRENCY] Create CurrencyListing Failed',
//     props<{ error: any}>()
// );

// // Load Delete Entity

// export const deleteCurrencyListing = createAction(
//     '[CURRENCY] Delete CurrencyListing',
//     props<{ currencyRates: CurrencyRates}>()
// );

// export const deleteCurrencyListingSuccess = createAction(
//     '[CURRENCY] Delete CurrencyListing Success',
//     props<{ currencyRates: CurrencyRates}>()
// );

// export const deleteCurrencyListingFailed = createAction(
//     '[CURRENCY] Create CurrencyListing Failed',
//     props<{ error: any}>()
// );