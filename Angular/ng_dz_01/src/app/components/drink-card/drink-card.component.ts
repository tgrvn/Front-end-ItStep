import { Component, Input, OnInit } from '@angular/core';

export interface ICard {
  strDrink: string,
  strInstructions: string,
  strDrinkThumb: string,
}

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.less']
})
export class DrinkCardComponent implements OnInit {

  constructor() { }

  @Input() drink!: ICard;

  ngOnInit(): void {
  }

}
