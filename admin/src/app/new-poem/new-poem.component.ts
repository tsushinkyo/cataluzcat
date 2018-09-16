import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poem } from '../poem';
import { PoemsService } from '../poems.service';

@Component({
  selector: 'app-new-poem',
  templateUrl: './new-poem.component.html',
  styleUrls: ['./new-poem.component.scss'],
  providers: [PoemsService]
})
export class NewPoemComponent implements OnInit {

  poem: Poem;

  constructor(
    private poemsService: PoemsService,
    private router: Router) { }

  ngOnInit() {
    this.newPoem();
  }

  newPoem() {
    this.poem = new Poem( '', '', '', new Date(), [] );
  }
  chipsKeyPress($event) {
    this.poem.chips = $event.target.value.replace(' ', '').split(',');
    if (this.poem.chips[0] === '') {
      this.poem.chips = [];
    }
  }
  onSubmit() {
    console.log('sbumit!');
    // this.poemsService.savePoem(this.poem);
    this.router.navigate(['/home']);
  }
}
