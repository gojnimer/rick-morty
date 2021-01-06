import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonagensRoutingModule } from './personagens-routing.module';
import { PersonagensListaComponent } from './personagens-lista/personagens-lista.component';


@NgModule({
  declarations: [PersonagensListaComponent],
  imports: [
    CommonModule,
    PersonagensRoutingModule
  ]
})
export class PersonagensModule { }
