import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { CurrencyListing } from '@currency-converter/api-interfaces';

@Component({
  selector: 'currency-converter-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent {
  currentCurrencyListing: CurrencyListing;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set currencyListing(value) {
    if (value) this.originalTitle = value.base;
    this.currentCurrencyListing = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
