import { CurrencyListing, CurrencyRate } from "@currency-converter/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as CurrencyListingActions from './currencies.actions';


export const CURRENCY_FEATURE_KEY = 'currencyRates';

export interface CurrencyListingState extends EntityState<CurrencyRate> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface CurrencyListingPartialState {
    readonly [CURRENCY_FEATURE_KEY]: CurrencyListingState
};

export const currencyListingAdapter: EntityAdapter<CurrencyRate> = createEntityAdapter<CurrencyRate>({ selectId: (c: any) => c.rate });

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
        // CurrencyListingActions.loadCurrencyListingFailed,
        CurrencyListingActions.loadCurrencyListingsFailed,
        // CurrencyListingActions.createCurrencyListingFailed,
        // CurrencyListingActions.updateCurrencyListingFailed,
        // CurrencyListingActions.deleteCurrencyListingFailed,
        onFailed
    ),
    on(
        // CurrencyListingActions.loadCurrencyListing,
        CurrencyListingActions.loadCurrencyListings,
        // CurrencyListingActions.createCurrencyListing,
        // CurrencyListingActions.updateCurrencyListing,
        // CurrencyListingActions.deleteCurrencyListing,
        onDispatch
    ),
    // on(
    //     CurrencyListingActions.loadCurrencyListingSuccess, (state, { currencyRates }) =>
    //     currencyListingAdapter.upsertOne(currencyRates, {...state, loaded: true})
    // ),
    on(
        CurrencyListingActions.selectCurrencyListing, (state, { currencyRatesId }) => ({
            ...state,
            selectedId: currencyRatesId
        })
    ),
    on(
        CurrencyListingActions.loadCurrencyListingsSuccess, (state, { currencyRates }) =>
        currencyListingAdapter.setAll(currencyRates, {...state, loaded: true})
    ),
    // on(
    //     CurrencyListingActions.deleteCurrencyListingSuccess, (state, { currencyRates }) =>
    //     currencyListingAdapter.removeOne(currencyRates.id, {...state, loaded: true})
    // ),
    // on(
    //     CurrencyListingActions.updateCurrencyListingSuccess, (state, { currencyRates }) =>
    //     currencyListingAdapter.updateOne(
    //         {id: currencyRates.rates, changes: currencyRates},
    //         {...state, loaded: true}
    //     )
    // ),
    // on(
    //     CurrencyListingActions.createCurrencyListingSuccess, (state, {currencyRates }) =>
    //     currencyListingAdapter.addOne(currencyRates, {...state, loaded: true})
    // ),
)

export function currencyListingReducer(
    state: CurrencyListingState | undefined,
    action: Action
) {
    return _currencyListingReducer(state, action)
}