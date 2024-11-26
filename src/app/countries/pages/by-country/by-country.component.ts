import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country',
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css',
})
export class ByCountryComponent implements OnInit {
  public countries: ICountry[] = [];
  public isLoading: boolean = false;
  public initialValue?: string = '';

  constructor(private CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this.CountriesService.cacheStore.byCountry.term;
    this.countries = this.CountriesService.cacheStore.byCountry.countries;
  }

  searchByCountry(term: string): void {
    // this.CountriesService.getCountryByCountry(term).subscribe((data) => {
    //   this.countries = data;
    // });

    //Refactoring Code
    this.isLoading = true;
    // this.CountriesService.getCountryBy(term, 'name').subscribe((data) => {
    this.CountriesService.getCountryByCountry(term).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
    });
  }
}
