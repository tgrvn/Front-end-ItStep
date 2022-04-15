import { Component, Input, OnInit } from '@angular/core';
import drinks from '../../../assets/data';
import { ICard } from '../drink-card/drink-card.component';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.less']
})
export class DrinksComponent implements OnInit {

  constructor() {
    this.drinks = drinks;    
   }

  @Input() drinks!: ICard[];

  ngOnInit(): void {
  }

}
