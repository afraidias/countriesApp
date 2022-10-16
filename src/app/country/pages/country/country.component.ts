import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
	selector: 'app-country',
	templateUrl: './country.component.html',
	styles: []
})
export class CountryComponent {
	criteria: string = '';
	hasError: boolean = false;
	countries: Country[] = []

	constructor(private countryService: CountryService) { }

	handleToast(value: boolean) {
		this.hasError = value;
	}

	search(country: string) {
		this.hasError = false;
		this.criteria = country;
		this.countryService.getCountry(country).subscribe({
			next: (countries) => this.countries = countries,
			error: (e) => {
				this.handleToast(true)
				this.countries = [];
				console.error(e);
			}
		})
	}
}
