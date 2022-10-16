import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CapitalComponent } from "./country/pages/capital/capital.component";
import { CountryDetailComponent } from "./country/pages/country-detail/country-detail.component";
import { CountryComponent } from "./country/pages/country/country.component";
import { RegionComponent } from "./country/pages/region/region.component";

const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: RegionComponent
    },
    {
        path: 'capital',
        component: CapitalComponent
    },
    {
        path: 'country/:id',
        component: CountryDetailComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }