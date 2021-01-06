import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonagensListaComponent } from './personagens-lista/personagens-lista.component';

const routes: Routes = [
  { path: '', component: PersonagensListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonagensRoutingModule { }
