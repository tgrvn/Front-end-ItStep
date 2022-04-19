import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.less']
})
export class DrinkCardComponent implements OnInit {

  @Input() currDrinks!: any;


  constructor() {
  }

  ngOnInit(): void {
  }

}
