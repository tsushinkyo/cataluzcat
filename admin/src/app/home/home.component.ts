import { Component, OnInit } from '@angular/core';


const POEMS = [
{
  title: 'Primer poema',
  image: 'https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmQKXjYZDgC47onwiw5ioQFU1Ssym3FXSs9Qhfkr3Ztj3M/superar-el-miedo-e1528344780641%20(1).jpg',
  date: '1/1/2018',
  chips : ['vivencias', 'experiencias'],
}
];

interface Poem {
  title: string;
  image: string;
  date: string;
  chips: string[];
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  poems: Poem[];

  constructor() { }

  ngOnInit() {
    this.poems = POEMS;
  }

}
