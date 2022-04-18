import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ICardGame } from '../utils/type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Output() cardClick: EventEmitter<any> = new EventEmitter();
  @Input() card!: ICardGame;

  public handleClick(event: any) {
    if (this.card.isSelect) {
      return;
    }
    this.card.isShow = true;
    this.cardClick.emit(event);    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
