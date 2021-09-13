import { Component } from '@angular/core';


@Component({
  selector: 'currency-converter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Currency Listing';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'currencyListings', icon: 'view_list', title: 'Currency Listings'}
  ]
}
