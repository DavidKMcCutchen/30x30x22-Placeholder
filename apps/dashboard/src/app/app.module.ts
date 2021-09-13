import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@currency-converter/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@currency-converter/core-data";
import { CoreStateModule } from "@currency-converter/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@currency-converter/environment';
import { UiLoginModule } from '@currency-converter/ui-login';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyListComponent } from './currency/currency-list/currency-list.component';
import { CurrencyDetailsComponent } from './currency/currency-details/currency-details.component';
@NgModule({
  declarations: [AppComponent, CurrencyComponent, CurrencyDetailsComponent, CurrencyListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
