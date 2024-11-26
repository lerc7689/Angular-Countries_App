import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';
import { region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css',
})
export class ByRegionComponent implements OnInit {
  public countries: ICountry[] = [];
  public initialValue?: region = '';
  public isLoading: boolean = false;
  public regions: region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  selectedRegion?: region;

  constructor(private CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.term;
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
  }

  searchByRegion(term: region): void {
    this.selectedRegion = term;
    this.isLoading = true;
    //Old Code
    // this.CountriesService.getCountryByRegion(term).subscribe((data) => {
    //   this.countries = data;
    // });

    //Recfactoring Code
    // this.CountriesService.getCountryBy(term, 'region').subscribe((data) => {
    this.CountriesService.getCountryByRegion(term).subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
    });
  }
}
