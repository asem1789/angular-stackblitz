import { Component, OnInit } from '@angular/core';
import { Flops } from './flops';

const flops = [
  {id: 1, name: "Freedom", link: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Battlefield_earth_poster.jpg/220px-Battlefield_earth_poster.jpg"},
  {id: 2, name: "Taken", link: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/TheRoomMovie.jpg/220px-TheRoomMovie.jpg"},
  {id: 3, name: "Shwshink", link: "https://images.squarespace-cdn.com/content/57e17548b8a79b25269cc43c/1543937220675-2YNE5M8Q4F5H28BYBKST/Santa+Martians.jpg?content-type=image%2Fjpeg"},
  {id: 4, name: "Dilemma", link: "https://upload.wikimedia.org/wikipedia/en/7/7f/Howard_the_Duck_%281986%29.jpg"},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  selectedIndex: number = -1;
  flops: Flops[];

  ngOnInit() {
    this.flops = flops;
  }
  
  onVoteClick(index: number) {
    if(this.isSelected(index)){
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  isSelected(index:number) {
    return this.selectedIndex === index;
  }

  anySelected(){
    return this.selectedIndex !== -1;
  }

  getButtonText(index: number) {
    if(this.isSelected(index)){
      return "Unvote";
    } else {
      return "Vote";
    }
  }

}
