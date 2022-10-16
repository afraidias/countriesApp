import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CountryTableComponent } from './country-table/country-table.component';
import { ToastComponent } from './toast/toast.component';
import { TitleComponent } from './title/title.component';
import { SearchInputComponent } from './search-input/search-input.component';



@NgModule({
  declarations: [
    TitleComponent,
    ToastComponent,
    CountryTableComponent,
    SearchInputComponent,
  ],
  exports: [
    TitleComponent,
    ToastComponent,
    CountryTableComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
