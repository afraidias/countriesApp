import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
	providedIn: 'root'
})
export class CountryService {
	private apiURL: string = 'https://restcountries.com/v3.1';

	get httParams() {
		return new HttpParams().set('fields', 'name,capital,flag,cca2,population');
	}

	constructor(private http: HttpClient) { }

	getCountry(country: string): Observable<Country[]> {
		return this.http.get<Country[]>(`${this.apiURL}/name/${country}`, { params: this.httParams }).pipe(
			tap(console.log)
		);
	}

	getCapital(capital: string): Observable<Country[]> {
		return this.http.get<Country[]>(`${this.apiURL}/capital/${capital}`, { params: this.httParams });
	}

	getCountryByCode(code: string): Observable<Country> {
		return this.http.get<Country>(`${this.apiURL}/alpha/${code}`);
	}

	getRegion(region: string): Observable<Country[]> {
		return this.http.get<Country[]>(`${this.apiURL}/region/${region}`, { params: this.httParams });
	}
}
