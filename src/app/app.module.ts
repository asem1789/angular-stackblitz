import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FilmListComponent, FilmDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
