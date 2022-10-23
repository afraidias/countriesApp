import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
	selector: 'app-region',
	templateUrl: './region.component.html',
	styles: [
	]
})
export class RegionComponent {
	regiones: string[] = ['americas', 'europe', 'africa', 'asia', 'oceania'];
	currentRegion: string = '';
	countries: Country[] = [];

	constructor(private countryService: CountryService) { }

	regionOn(region: string) {
		if (this.currentRegion === region) return
		this.currentRegion = region;
		this.getRegion();
	}

	getRegion() {
		this.countryService.getRegion(this.currentRegion).subscribe({
			next: (countries) => this.countries = countries,
			error: (e) => {
				this.countries = [];
				console.error(e);
			}
		});
	}
}
