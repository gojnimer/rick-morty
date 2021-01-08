import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personagem } from './personagem';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  private readonly API = 'https://rickandmortyapi.com/api/character/'

  constructor(private http: HttpClient) { }

  getPersonagens(url = null) {
    return this.http.get<Personagem[]>(url || this.API)
      .pipe(
        tap(console.log)
      )
  }
}
