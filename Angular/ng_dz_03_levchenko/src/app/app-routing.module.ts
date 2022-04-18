import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongatulateComponent } from './components/congatulate/congatulate.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: 'congratulation', component: CongatulateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
