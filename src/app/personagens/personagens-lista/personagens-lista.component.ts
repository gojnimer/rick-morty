import { Component, HostListener, OnInit } from '@angular/core';
import { Personagem } from '../personagem';
import { PersonagensService } from '../personagens.service';

@Component({
  selector: 'app-personagens-lista',
  templateUrl: './personagens-lista.component.html',
  styleUrls: ['./personagens-lista.component.css']
})
export class PersonagensListaComponent implements OnInit {

  personagens: Personagem[];
  next: string;
  loading:boolean = false;

  constructor(private service: PersonagensService) { }

  ngOnInit(): void {
    this.service.getPersonagens().subscribe(
      (response: any) => {
        this.next = response.info.next;
        this.personagens = response.results.map(obj => { console.log(obj); return { name: obj.name, image: obj.image } });
      },
      (error) => console.log(error),
      () => console.log('done')
    );
  }




  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadPersonagens();
    }
  }

  loadPersonagens() {
    if (this.next && !this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.service.getPersonagens(this.next).subscribe(
          (response: any) => {
            this.next = response.info.next;
            const newPersonagens = response.results.map(obj => { console.log(obj); return { name: obj.name, image: obj.image } });
            console.log('new', newPersonagens);
            this.personagens = [...this.personagens, ...newPersonagens];
            console.log(this.personagens);
          },
          (error) => console.log(error),
          () => this.loading = false
        );
      },3000);
      
    }

  }

}
