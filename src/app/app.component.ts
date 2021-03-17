import { Component } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: any[] = [];
  searchFilter: string = '';

  
  constructor(
    private countriesService: CountriesService,
  ) {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countriesService.getAllCountries().subscribe((res: any[]) => {
      this.countries = res;
    });
  }
}
