import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';
import { CurrencyListing, CurrencyRate, CurrencyRates } from "@currency-converter/api-interfaces";
import { Observable } from 'rxjs';


const BASE_URL = 'http://data.fixer.io/api/latest?access_key=55c74b359460f672461833c2417f4ff5';
// const MODEL = 'currencyListings';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(
    private httpClient: HttpClient,
  ) {}

getData(): Observable<CurrencyRates> {
    return this.httpClient.get<CurrencyListing>(BASE_URL).pipe(
      map((response) => response.rates),
      map((rates) => Object.entries(rates)),
      map((rateEntries) => rateEntries.map((entry) => ({ rate: entry[0], value: entry[1] }))),
    );
  };

  // getOne(id: string): Observable<CurrencyRates> {
  //   return this.httpClient.get<CurrencyRates>(this.getUrlById(id))
  // }

  // private getUrl() {
  //   return `${BASE_URL}`
  // };

  // private getUrlById(id) {
  //   return `${this.getUrl()}/${id}`
  // }
}
