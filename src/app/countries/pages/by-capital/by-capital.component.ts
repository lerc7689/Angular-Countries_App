import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css',
})
export class ByCapitalComponent {
  public countries: ICountry[] = [];
  public isLoading: boolean = false;
  public initialValue?: string = '';

  constructor(private CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this.CountriesService.cacheStore.byCapital.term;
    this.countries = this.CountriesService.cacheStore.byCapital.countries;
  }
  searchByCapital(term: string): void {
    console.log('Desde my capital page');
    console.log(term);

    // this.CountriesService.getCountryByCapital(term).subscribe((data) => {
    //   this.countries = data;
    // });
    this.isLoading = true;
    // this.CountriesService.getCountryBy(term, 'capital').subscribe((data) => {
    this.CountriesService.getCountryByCapital(term).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
    });
  }
}
