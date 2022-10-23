import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
	selector: 'app-country-detail',
	templateUrl: './country-detail.component.html',
	styles: [
	]
})
export class CountryDetailComponent implements OnInit {
	country: Country[] = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private countryService: CountryService
	) { }

	ngOnInit(): void {
		this.activatedRoute.params
			.pipe(
				switchMap(({id}) => this.countryService.getCountryByCode(id)),
				tap(console.log)
			)
			.subscribe((country: Country[]) => this.country = country);
	}

}
