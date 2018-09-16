import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Poem } from './poem';


@Injectable({
  providedIn: 'root',
})
export class PoemsService {

  public poemsUrl = 'assets/poems.json';
  poems: Poem[];

  constructor(
    private http: HttpClient
  ) {
   }

  getPoems(): Observable<Poem[]> {
    return this.http.get('http://localhost/api/poems') as Observable<Poem[]>;
  }

  getPoemsDummy(): Observable<Array<Poem>>  {
    return this.http.get<Array<Poem>>(this.poemsUrl);
  }

  savePoem(poem: Poem) {
    this.poems.unshift(poem);
  }
}
