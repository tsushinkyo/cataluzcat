import { Component, OnInit } from '@angular/core';

import { Poem } from '../poem';

@Component({
  selector: 'app-new-poem',
  templateUrl: './new-poem.component.html',
  styleUrls: ['./new-poem.component.scss']
})
export class NewPoemComponent implements OnInit {

  poem: Poem;

  constructor() { }

  ngOnInit() {
    this.newPoem();
  }

  newPoem() {
    this.poem = new Poem( '', '', '', new Date(), [] );
  }
  consolePoem() {
    console.log(this.poem);
  }
}
