import { Component, OnInit } from '@angular/core';
import { PoemsService } from '../poems.service';
import { Poem } from '../poem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PoemsService]
})

export class HomeComponent implements OnInit {

  poems: Poem[];

  constructor(
    private poemsService: PoemsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.poemsService.getPoems().subscribe((data: Poem[]) => {
      this.poems = data;
    });
  }

  titleHandler(event: CustomEvent) {
    this.router.navigate(['/poem-detail', event.detail]);
  }

}
