import { NgModule, ModuleWithProviders } from '@angular/core';
import { CURRENCY_ENVIRONMENT } from './currency.token';
import { CurrencyEnvironment } from "./currency.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: CurrencyEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: CURRENCY_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
