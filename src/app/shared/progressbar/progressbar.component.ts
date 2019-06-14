import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnChanges {
  userRating: number;

  constructor() { }

  @Input() userScore:Number=0;

  ngOnChanges(changes:SimpleChanges) {
    setTimeout(() => {
      this.userRating=changes.userScore.currentValue;
    }, 500);
  }
  

}
