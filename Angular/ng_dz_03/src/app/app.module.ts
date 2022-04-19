import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { CardComponent } from './components/card/card.component';
import { CongatulateComponent } from './components/congatulate/congatulate.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent,
    CongatulateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
