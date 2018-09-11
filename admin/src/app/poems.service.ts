import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

  export interface Poem {
    title: string;
    image: string;
    date: string;
    chips: string[];
  }


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

  getPoems(): Observable<Array<Poem>>  {
    return this.http.get<Array<Poem>>(this.poemsUrl);
  }
}
