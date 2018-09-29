import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poem } from '../poem';
import { PoemsService } from '../poems.service';

@Component({
  selector: 'app-poem-detail',
  templateUrl: './poem-detail.component.html',
  styleUrls: ['./poem-detail.component.scss']
})
export class PoemDetailComponent implements OnInit {


  poem: Poem;
  id: number;
  private subscription: any;
  constructor(
    private poemsService: PoemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe( params => {
      this.id = +params['id'];
      this.getPoemDetails();
    });
  }

  private getPoemDetails() {
    this.poemsService.getPoemDetails(this.id).subscribe(
      (res: any) => {
        this.poem = this.parsePoemResponse(res);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }

  private parsePoemResponse(res: any): Poem {
    const poem: Poem = {
      title : res.title,
      image : res.image,
      id : res.id,
      poemText : res.poemText,
      date:  new Date(res.date)
    };

    return poem;

  }

}
