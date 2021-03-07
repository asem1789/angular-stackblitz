import { Component, Input } from '@angular/core';
import { Film } from '../../data/film.interface';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent  {
  @Input() films: Film[] = [];

}
