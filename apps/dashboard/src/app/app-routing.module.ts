import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { LoginComponent, WildComponent } from "@currency-converter/ui-login";
import { CurrencyComponent } from './currency/currency.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'currencyListings', component: CurrencyComponent},
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }