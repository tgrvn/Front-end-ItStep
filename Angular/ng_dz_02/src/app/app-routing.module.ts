import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksComponent } from './components/drinks/drinks.component';
import { DrinkComponent } from './components/drink/drink.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'cocktails', component: DrinksComponent,
    children: [
      { path: ':id', component: DrinkComponent }
    ]
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
