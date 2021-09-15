import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { CurrencyListing, CurrencyRates } from "@currency-converter/api-interfaces";
import { CurrenciesService } from "@currency-converter/core-data";
import * as CurrencyListingActions from './currencies.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class CurrencyListingEffects{
    // loadCurrencyListing$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CurrencyListingActions.loadCurrencyListing),
    //         fetch({
    //             run: (action) =>
    //                 this.currenciesService
    //                     .getOne(action.currencyRatesId)
    //                     .pipe(map((currencyRates: CurrencyRates) => CurrencyListingActions.loadCurrencyListingSuccess({ currencyRates }))),
    //                 onError: (action, error) => CurrencyListingActions.loadCurrencyListingFailed({ error })    
    //         })
    //     ));
    loadCurrencyData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CurrencyListingActions.loadCurrencyListings),
            fetch({
                run: () =>
                    this.currenciesService
                    .getData()
                    .pipe(
                        map((currencyRates: CurrencyRates) => CurrencyListingActions.loadCurrencyListingsSuccess({ currencyRates }))
                    ),
                onError: (action, error) => CurrencyListingActions.loadCurrencyListingsFailed({ error })    
            })
        ));
    //     createCurrencyListing$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CurrencyListingActions.createCurrencyListing),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.currencyListingsService
    //                     .create(action.currencyListing)
    //                     .pipe(map((currencyListing: CurrencyListing) => CurrencyListingActions.createCurrencyListingSuccess({ currencyListing }))),
    //                 onError: (action, error) => CurrencyListingActions.createCurrencyListingFailed({ error })    
    //         })
    // ));

    // updateCurrencyListing$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CurrencyListingActions.updateCurrencyListing),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.currencyListingsService
    //                     .update(action.currencyListing)
    //                     .pipe(map((currencyListing: CurrencyListing) => CurrencyListingActions.updateCurrencyListingSuccess({ currencyListing}))),
    //                 onError: (action, error) => CurrencyListingActions.updateCurrencyListingFailed({ error })    
    //         })
    // ));

    // deleteCurrencyListing$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CurrencyListingActions.deleteCurrencyListing),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.currencyListingsService
    //                     .delete(action.currencyListing)
    //                     .pipe(
    //                         map(() => CurrencyListingActions.deleteCurrencyListingSuccess({ currencyListing: action.currencyListing }))
    //                     ),
    //                 onError: (action, error) => CurrencyListingActions.deleteCurrencyListingFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private currenciesService: CurrenciesService
    ) {}    
}