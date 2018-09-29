import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('fileInput') fileInput;
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

  previewImage($event) {
    console.log($event);
    this.getBase64(this.fileInput.nativeElement.files[0]).then(
      (image: string) => {
        this.poem.image = image;
      },
      (error) => {
        console.log(error);
      });
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
 }
  submitForm($event) {
    this.poemsService.savePoem(this.poem).subscribe( (res) => {
      this.router.navigate(['/home']);
    },
    (err) => {
      console.log(err);
    });
  }
}
