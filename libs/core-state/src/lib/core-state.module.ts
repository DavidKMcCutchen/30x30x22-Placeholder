import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RootStoreConfig, StoreModule } from "@ngrx/store";
import { CoreDataModule } from '@currency-converter/core-data';
import { CurrencyListingEffects } from './currencies/currencies.effects';
import { reducers } from ".";


const store_name = 'CurrencyListing Store';


const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};


@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([CurrencyListingEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})

export class CoreStateModule {}