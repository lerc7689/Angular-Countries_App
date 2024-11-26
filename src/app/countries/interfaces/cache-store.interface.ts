import { ICountry } from './country.interface';
import { region } from './region.type';

export interface ICacheStore {
  byCountry: ITermsCountry;
  byCapital: ITermsCountry;
  byRegion: ITermsRegion;
}

export interface ITermsCountry {
  term: string;
  countries: ICountry[];
}

export interface ITermsRegion {
  term?: region;
  countries: ICountry[];
}
