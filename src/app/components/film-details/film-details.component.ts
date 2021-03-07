import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../data/film.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent  implements OnInit {
  @Input() film!: Film;
  // @Input() film: Film;

  constructor() {}
  
  ngOnInit() {
    // console.log(this.film);
  }

}
