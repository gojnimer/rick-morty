import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personagens'},
  { path: 'home', component: HomeComponent },
  { path: 'personagens',
  loadChildren: () => import('./personagens/personagens.module')
  .then((m) => m.PersonagensModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
