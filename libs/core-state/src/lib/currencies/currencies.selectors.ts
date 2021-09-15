import { emptyCurrencyListing } from "@currency-converter/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { currencyListingAdapter, CurrencyListingState, CURRENCY_FEATURE_KEY } from "./currencies.reducer";

export const getCurrencyListingState = createFeatureSelector<CurrencyListingState>(CURRENCY_FEATURE_KEY);

const { selectAll, selectEntities } = currencyListingAdapter.getSelectors();

export const getCurrencyListingsLoaded = createSelector(
    getCurrencyListingState,
    (state: CurrencyListingState) => state.loaded
);

export const getCurrencyListingError = createSelector(
    getCurrencyListingState,
    (state: CurrencyListingState) => state.error
);

export const getAllCurrencyListings = createSelector(
    getCurrencyListingState,
    (state: CurrencyListingState) => selectAll(state)
);

export const getCurrencyListingEntities = createSelector(
    getCurrencyListingState,
    (state: CurrencyListingState) => selectEntities(state)
);

export const getSelectedCurrencyListingId = createSelector(
    getCurrencyListingState,
    (state: CurrencyListingState) => state.selectedId
);

export const getSelectedCurrencyListing = createSelector(
    getCurrencyListingEntities,
    getSelectedCurrencyListingId,
    (entities, selectedId) => selectedId && entities[selectedId] || emptyCurrencyListing
);