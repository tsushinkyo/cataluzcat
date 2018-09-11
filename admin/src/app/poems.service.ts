import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getPoems() {
    return this.http.get(this.poemsUrl);
  }
}
