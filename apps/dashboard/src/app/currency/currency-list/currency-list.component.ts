import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyListing } from "@currency-converter/api-interfaces";


@Component({
  selector: 'currency-converter-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent {
  @Input() currencyListings: CurrencyListing[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() currencyListingViewed = new EventEmitter();
}
