import { Injectable } from "@angular/core";
import { CurrencyListing } from "@currency-converter/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as CurrencyListingActions from './currencies.actions';
import * as CurrencyListingSelectors from './currencies.selectors';
import * as fromCurrencyListings from './currencies.reducer';


@Injectable({
    providedIn: 'root'
})

export class CurrencyListingFacade {
    allCurrencyListings$ = this.store.pipe(
        map((state) => CurrencyListingSelectors.getAllCurrencyListings(state)),
    )
    selectedCurrencyListings$ = this.store.pipe(select(CurrencyListingSelectors.getSelectedCurrencyListing));
    loaded$ = this.store.pipe(select(CurrencyListingSelectors.getCurrencyListingsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === CurrencyListingActions.createCurrencyListing({} as any) .type ||
        action.type === CurrencyListingActions.updateCurrencyListing({} as any) .type ||
        action.type === CurrencyListingActions.deleteCurrencyListing({} as any) .type
        ))

        selectCurrencyListing(currencyListingId: string) {
            this.dispatch(CurrencyListingActions.selectCurrencyListing({ currencyListingId }));
        };

        loadCurrencyListings() {
            this.dispatch(CurrencyListingActions.loadCurrencyListings())
        };

        loadCurrencyListing(currencyListingId: string) {
            this.dispatch(CurrencyListingActions.loadCurrencyListing({ currencyListingId }))
        };

        saveCurrencyListing(currencyListing: CurrencyListing) {
            currencyListing.base ? this.updateCurrencyListing(currencyListing) : this.createCurrencyListing(currencyListing)
        };

        createCurrencyListing(currencyListing: CurrencyListing) {
            this.dispatch(CurrencyListingActions.createCurrencyListing({ currencyListing }))
        };

        updateCurrencyListing(currencyListing: CurrencyListing) {
            this.dispatch(CurrencyListingActions.updateCurrencyListing({ currencyListing }))
        };

        deleteCurrencyListing(currencyListing: CurrencyListing) {
            this.dispatch(CurrencyListingActions.deleteCurrencyListing({ currencyListing }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromCurrencyListings.CurrencyListingPartialState>,
            private actions$: ActionsSubject
        ) {}
}