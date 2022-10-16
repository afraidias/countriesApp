import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
	selector: 'app-capital',
	templateUrl: './capital.component.html',
	styles: []
})
export class CapitalComponent {
	criteria: string = '';
	hasError: boolean = false;
	countries: Country[] = []

	constructor(private countryService: CountryService) { }

	handleToast(value: boolean) {
		this.hasError = value;
	}

	search(capital: string) {
		this.hasError = false;
		this.criteria = capital;
		this.countryService.getCapital(capital).subscribe({
			next: (countries) => this.countries = countries,
			error: (e) => {
				this.handleToast(true)
				this.countries = [];
				console.error(e);
			}
		})
	}
}
