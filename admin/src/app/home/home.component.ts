import { Component, OnInit } from '@angular/core';
import { Poem, PoemsService } from '../poems.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PoemsService]
})

export class HomeComponent implements OnInit {

  poems: Poem[];

  constructor(
    private poemsService: PoemsService
  ) { }

  ngOnInit() {
    this.poemsService.getPoems().subscribe((data: Poem[]) => this.poems = data );

  }

}
