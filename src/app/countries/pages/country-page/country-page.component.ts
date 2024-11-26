import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {
  public country?: ICountry;
  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.searchCountryByCode(id);
    });
  }

  searchCountryByCode(code: string) {
    this.servicio.getCountryByAlphaCode(code).subscribe((country) => {
      if (!country) return this.router.navigateByUrl('');

      return (this.country = country);
    });

    //Refactoring Code
    // this.servicio.getCountryBy(code, 'name').subscribe((country) => {
    //   if (!country) return this.router.navigateByUrl('');

    //   return (this.country = country);
    // });
  }
}
