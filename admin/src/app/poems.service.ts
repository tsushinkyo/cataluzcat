import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getPoemDetails(id: number): Observable<Poem[]> {
    return this.http.get('http://localhost/api/poems/' + id) as Observable<Poem[]>;
  }

  savePoem(poem: Poem) {
    if ( this.poems && this.poems.length ) {
      this.poems.unshift(poem);
    }


    return this.http.post('http://localhost/api/poems/add', JSON.stringify(poem));
  }
}
