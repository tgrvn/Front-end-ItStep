import { Component, OnInit } from '@angular/core';
import { DrinkServiceService } from 'src/app/services/drink-service.service';


export interface IDrink {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string,
  strInstructions: string,
  strAlcoholic: string,
  strCategory: string,
  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strIngredient4: string,
  strIngredient5: string,
  strIngredient6: string,
  strIngredient7: string,
  strIngredient8: string,
  strIngredient9: string,
  strIngredient10: string,
  strIngredient11: string,
  strIngredient12: string,
  strIngredient13: string,
  strIngredient14: string,
  strIngredient15: string,
}

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.less']
})
export class DrinksComponent implements OnInit {

  public drinks!: IDrink[];

  public getNameDrink(value: string): void {
    this.drinkHttp.getDrinksByName(value)
      .subscribe((data: any) => {
        if (data) {
          const { drinks } = data;
          this.drinks = drinks;
        }
      });
  }

  constructor(
    private drinkHttp: DrinkServiceService,
  ) {
  }

  ngOnInit(): void {

    this.drinkHttp.getDrinks()
      .subscribe((data: any) => {
        if (data) {
          const { drinks } = data;
          this.drinks = drinks;          
        }
      });
  }

}
