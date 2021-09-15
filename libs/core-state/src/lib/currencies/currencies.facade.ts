import { Injectable } from "@angular/core";
import { CurrencyRate, CurrencyRates } from "@currency-converter/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as CurrencyListingActions from './currencies.actions';
import * as CurrencyListingSelectors from './currencies.selectors';
import * as fromCurrencyListings from './currencies.reducer';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class CurrencyListingFacade {
    allCurrencyListings$: Observable<CurrencyRate[]> = this.store.pipe(
        select(CurrencyListingSelectors.getAllCurrencyListings),
    )
    selectedCurrencyListings$: Observable<CurrencyRate> = this.store.pipe(select(CurrencyListingSelectors.getSelectedCurrencyListing));
    loaded$ = this.store.pipe(select(CurrencyListingSelectors.getCurrencyListingsLoaded));

    // mutations$ = this.actions$.pipe(
    //     filter((action: Action) =>
    //     action.type === CurrencyListingActions.createCurrencyListing({} as any) .type ||
    //     action.type === CurrencyListingActions.updateCurrencyListing({} as any) .type ||
    //     action.type === CurrencyListingActions.deleteCurrencyListing({} as any) .type
    //     ))

        selectCurrencyListing(currencyRatesId: string) {
            this.dispatch(CurrencyListingActions.selectCurrencyListing({ currencyRatesId }));
        };

        loadCurrencyListings() {
            this.dispatch(CurrencyListingActions.loadCurrencyListings())
        };

        // loadCurrencyListing(currencyRatesId: string) {
        //     this.dispatch(CurrencyListingActions.loadCurrencyListing({ currencyRatesId }))
        // };

        // saveCurrencyListing(currencyRates: CurrencyRates) {
        //     currencyRates.rates ? this.updateCurrencyListing(currencyRates) : this.createCurrencyListing(currencyRates)
        // };

        // createCurrencyListing(currencyRates: CurrencyRates) {
        //     this.dispatch(CurrencyListingActions.createCurrencyListing({ currencyRates }))
        // };

        // updateCurrencyListing(currencyRates: CurrencyRates) {
        //     this.dispatch(CurrencyListingActions.updateCurrencyListing({ currencyRates }))
        // };

        // deleteCurrencyListing(currencyRates: CurrencyRates) {
        //     this.dispatch(CurrencyListingActions.deleteCurrencyListing({ currencyRates }))
        // };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromCurrencyListings.CurrencyListingPartialState>,
            private actions$: ActionsSubject
        ) {}
}