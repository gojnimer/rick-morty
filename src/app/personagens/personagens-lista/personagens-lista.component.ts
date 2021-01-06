import { Component, OnInit } from '@angular/core';
import { Personagem } from '../personagem';
import { PersonagensService } from '../personagens.service';

@Component({
  selector: 'app-personagens-lista',
  templateUrl: './personagens-lista.component.html',
  styleUrls: ['./personagens-lista.component.css']
})
export class PersonagensListaComponent implements OnInit {

  personagens: Personagem[];

  constructor(private service: PersonagensService) { }

  ngOnInit(): void {
    this.service.getPersonagens().subscribe(
      (response: any) => this.personagens = response.results.map(obj => { console.log(obj); return { name: obj.name, image: obj.image } }),
      (error) => console.log(error),
      () => console.log('done')
      );
  }

}
