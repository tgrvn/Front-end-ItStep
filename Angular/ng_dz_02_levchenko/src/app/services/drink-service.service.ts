import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkServiceService {


  public getDrinks<T>(): Observable<T> {
    return this.http.get<T>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }

  public getDrinksByName<T>(name: string): Observable<T> {
    return this.http.get<T>(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name
    );
  }

  public getDrinksByID<T>(id: string): Observable<T> {
    return this.http.get<T>(
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id
    );
  }

  constructor(private http: HttpClient) { }
}
