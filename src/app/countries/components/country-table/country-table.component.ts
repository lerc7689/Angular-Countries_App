import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      img {
        width: 40px;
      }
    `,
  ],
})
export class CountryTableComponent {
  @Input()
  public countries: ICountry[] = [];
}
