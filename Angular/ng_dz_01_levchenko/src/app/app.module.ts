import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    DrinkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
