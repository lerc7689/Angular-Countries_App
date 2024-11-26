import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedSearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    ByCountryComponent,
    CountryTableComponent,
    CountryPageComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
