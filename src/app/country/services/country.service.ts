import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
	providedIn: 'root'
})
export class CountryService {
	private apiURL: string = 'https://restcountries.com/v3.1';

	constructor(private http: HttpClient) { }

	getCountry(country: string): Observable<Country[]> {
		return this.http.get<Country[]>(`${this.apiURL}/name/${country}`);
	}

	getCapital(capital: string): Observable<Country[]> {
		return this.http.get<Country[]>(`${this.apiURL}/capital/${capital}`);
	}
}
