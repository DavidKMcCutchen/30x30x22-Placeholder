import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { CurrencyListing, CurrencyPagination } from "@currency-converter/api-interfaces";
import { Observable } from 'rxjs';


const BASE_URL = 'http://data.fixer.io/api/latest?access_key=65037742dd0f6ebb51e65b31b89cf954/';
const MODEL = 'currencyListings';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(
    private httpClient: HttpClient,
  ) {}

getAll(): Observable<CurrencyListing[]> {
    return this.httpClient.get<CurrencyPagination>(this.getUrl()).pipe(
      map((response) => response.results)
    );
  };

  getOne(id: string): Observable<CurrencyListing> {
    return this.httpClient.get<CurrencyListing>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
