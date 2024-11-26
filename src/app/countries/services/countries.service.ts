import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map, delay, tap } from 'rxjs';
import { ICountry } from '../interfaces/country.interface';
import { ICacheStore } from '../interfaces/cache-store.interface';
import { region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  public apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: ICacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { term: '', countries: [] },
  };

  constructor(private http: HttpClient) {
    this.loadToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  loadToLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  getCountryByAlphaCode(term: string): Observable<ICountry | null> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.http.get<ICountry[]>(url).pipe(
      tap((countries) => (this.cacheStore.byCountry = { term, countries })),
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }
  //Old Code
  getCountryByCapital(term: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<ICountry[]>(url).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.saveToLocalStorage()),
      catchError(() => of([]))
    );
  }

  getCountryByRegion(term: region): Observable<ICountry[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<ICountry[]>(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { term, countries })),
      tap(() => this.saveToLocalStorage()),
      catchError(() => of([]))
    );
  }

  getCountryByCountry(term: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<ICountry[]>(url).pipe(
      tap((countries) => (this.cacheStore.byCountry = { term, countries })),
      tap(() => this.saveToLocalStorage()),
      catchError(() => of([]))
    );
  }

  //Refactoring Code - hice un metodo generico que abarca los 3 de arriba
  // getCountryBy(term: string, typeOfSearch: string): Observable<ICountry[]> {
  //   const url = `${this.apiUrl}/${typeOfSearch}/${term}`;
  //   return this.http.get<ICountry[]>(url).pipe(
  //     catchError(() => of([]))
  //     // delay(2000)
  //   );
  // }
}
