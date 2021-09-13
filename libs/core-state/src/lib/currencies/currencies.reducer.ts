import { CurrencyListing } from "@currency-converter/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as CurrencyListingActions from './currencies.actions';

export const CURRENCY_FEATURE_KEY = 'currencyListings';

export interface CurrencyListingState extends EntityState<CurrencyListing> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface CurrencyListingPartialState {
    readonly [CURRENCY_FEATURE_KEY]: CurrencyListingState
};

export const currencyListingAdapter: EntityAdapter<CurrencyListing> = createEntityAdapter<CurrencyListing>({ selectId: (currency) => currency.base });

export const initialCurrencyListingState: CurrencyListingState = currencyListingAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): CurrencyListingState => ({ ...state, error});

const onDispatch = (state, action): CurrencyListingState => ({
    ...state,
    loaded: false,
    error: null
});

const _currencyListingReducer = createReducer(
    initialCurrencyListingState,
    on(
        CurrencyListingActions.loadCurrencyListingFailed,
        CurrencyListingActions.loadCurrencyListingsFailed,
        CurrencyListingActions.createCurrencyListingFailed,
        CurrencyListingActions.updateCurrencyListingFailed,
        CurrencyListingActions.deleteCurrencyListingFailed,
        onFailed
    ),
    on(
        CurrencyListingActions.loadCurrencyListing,
        CurrencyListingActions.loadCurrencyListings,
        CurrencyListingActions.createCurrencyListing,
        CurrencyListingActions.updateCurrencyListing,
        CurrencyListingActions.deleteCurrencyListing,
        onDispatch
    ),
    on(
        CurrencyListingActions.loadCurrencyListingSuccess, (state, { currencyListing }) =>
        currencyListingAdapter.upsertOne(currencyListing, {...state, loaded: true})
    ),
    on(
        CurrencyListingActions.selectCurrencyListing, (state, { currencyListingId }) => ({
            ...state,
            selectedId: currencyListingId
        })
    ),
    on(
        CurrencyListingActions.loadCurrencyListingsSuccess, (state, { currencyListings }) =>
        currencyListingAdapter.setAll(currencyListings, {...state, loaded: true})
    ),
    on(
        CurrencyListingActions.deleteCurrencyListingSuccess, (state, { currencyListing }) =>
        currencyListingAdapter.removeOne(currencyListing.base, {...state, loaded: true})
    ),
    on(
        CurrencyListingActions.updateCurrencyListingSuccess, (state, { currencyListing }) =>
        currencyListingAdapter.updateOne(
            {id: currencyListing.base, changes: currencyListing},
            {...state, loaded: true}
        )
    ),
    on(
        CurrencyListingActions.createCurrencyListingSuccess, (state, {currencyListing }) =>
        currencyListingAdapter.addOne(currencyListing, {...state, loaded: true})
    ),
)

export function currencyListingReducer(
    state: CurrencyListingState | undefined,
    action: Action
) {
    return _currencyListingReducer(state, action)
}