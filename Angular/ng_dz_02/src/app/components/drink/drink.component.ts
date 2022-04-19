import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, RouterLink } from '@angular/router';
import { DrinkServiceService } from '../../services/drink-service.service';
import { IDrink } from '../drinks/drinks.component';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.less']
})
export class DrinkComponent implements OnInit {

  public drink!: IDrink[];
  public ingridiends: string[] = [];

  public handlClick(): void {
    this.router.navigate(['cocktails'])
  }

  public getIngridienst(drink: any): void {
    for (const key in drink) {
      if (key.includes('strIngredient') && drink[key]) {
        this.ingridiends.push(drink[key]);
      }
    }
  }

  constructor(
    private router: Router,
    private idRoute: ActivatedRoute,
    private drinkHttp: DrinkServiceService
  ) {
  }

  ngOnInit(): void {
    this.idRoute.params.subscribe(type => {
      if (type['id']) {
        this.drinkHttp.getDrinksByID(type['id'])
          .subscribe((data: any) => {
            if (data) {
              const { drinks } = data;
              this.drink = drinks;
              this.getIngridienst(this.drink[0]);
            }
          })
      }
    })
  }
}
