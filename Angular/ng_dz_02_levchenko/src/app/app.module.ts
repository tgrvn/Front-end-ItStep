import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { DrinkComponent } from './components/drink/drink.component';
import { ButtonComponent } from './ui/button/button.component';
import { InputComponent } from './ui/input/input.component';
import { DrinkServiceService } from './services/drink-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinksComponent,
    DrinkComponent,
    ButtonComponent,
    InputComponent,
    ErrorPageComponent,
    WelcomeComponent,
    DrinkCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DrinkServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
