import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { CurrencyListing, emptyCurrencyListing } from '@currency-converter/api-interfaces';
import { CurrencyListingFacade } from '@currency-converter/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'currency-converter-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  allCurrencyListings$: Observable<CurrencyListing[]> = this.currencyListingFacade.allCurrencyListings$;
  selectedCurrencyListing$: Observable<CurrencyListing> = this.currencyListingFacade.selectedCurrencyListings$;

  form: FormGroup;

  constructor(
    private currencyListingFacade: CurrencyListingFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.currencyListingFacade.mutations$.subscribe((_) => this.resetCurrencyListing());
  }

  ngOnInit() {
    this.initForm();
    this.currencyListingFacade.loadCurrencyListings();
    this.resetCurrencyListing()

    const currencyListingRouteId = this.route.snapshot.params['id'];

    if (currencyListingRouteId) {
      this.loadCurrencyListing((currencyListingRouteId))
    }
  }

  viewCurrencyListing(currencyListingId: string) {
    this.router.navigate(["currencyListings", currencyListingId])
  }

  loadCurrencyListing(currencyListingId: string) {
    this.currencyListingFacade.selectCurrencyListing(currencyListingId);
    this.currencyListingFacade.loadCurrencyListing(currencyListingId);
  }

  selectCurrencyListing(currencyListing: CurrencyListing) {
    this.currencyListingFacade.selectCurrencyListing(currencyListing.base)
    this.form.patchValue(currencyListing);
  }

  saveCurrencyListing(currencyListing: CurrencyListing) {
    this.currencyListingFacade.saveCurrencyListing(currencyListing);
  }

  deleteCurrencyListing(currencyListing: CurrencyListing) {
    this.currencyListingFacade.deleteCurrencyListing(currencyListing);
  }

  resetCurrencyListing() {
    this.form.reset();
    this.selectCurrencyListing(emptyCurrencyListing)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      dateOfBirth: [''],
      placeOfBirth: [''],
      occupation: [''],
      iq: [''],
      banished: ['']
    })
  }
}
