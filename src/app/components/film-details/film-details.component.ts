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

  /*

    * if I comment line 10, uncomment line 11, will occur error : "Property 'film' has no initializer and is not definitely assigned in the constructor."
    * To see my screen Error, you can click on "Show screen Error" in right top of page,
  
    * in stackblitz site you will no notice Error, I dont know why, but locally I have

    * I can skipt this error as above Or change these varaibles "noImplicitReturns" & "strictPropertyInitialization"  in tsconfig.json to false

    #Questions:
    @ how can I handle this error without skip it


  */


  constructor() {
  }
  
  ngOnInit() {
    // console.log(this.film);
  }

}
