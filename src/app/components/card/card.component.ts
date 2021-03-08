import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Flops } from 'src/app/flops';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() index: number;
  @Input() flop: Flops;
  @Output() afterSelected = new EventEmitter();

  selectedIndex: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  onVoteClick(index: number) {
    if(this.isSelected(index)){
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }

    this.afterSelected.emit(this.selectedIndex);
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