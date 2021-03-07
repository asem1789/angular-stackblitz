import { Component } from '@angular/core';
import { films } from './data/films';
import { Film } from './data/film.interface';
import { Episode } from './enums/episode.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  /** The films persisted in the database. */
  films: Film[] = films;
}
