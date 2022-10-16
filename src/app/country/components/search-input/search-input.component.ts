import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styles: [
	]
})
export class SearchInputComponent implements OnInit {
	@Input() placeholder: string = '';
	@Output() onEnter	: EventEmitter<string> = new EventEmitter();
	@Output() onDebounce: EventEmitter<string> = new EventEmitter();

	debouncer: Subject<string> = new Subject();
	criteria: string = '';

	constructor() { }

	ngOnInit(): void {
		this.debouncer
			.pipe(debounceTime(300))
			.subscribe(criteriaValue => {
				this.onDebounce.emit(criteriaValue);
			});
	}

	search() {
		this.onEnter.emit(this.criteria);
	}

	handleKeyPress() {
		this.debouncer.next(this.criteria);
	}
}
