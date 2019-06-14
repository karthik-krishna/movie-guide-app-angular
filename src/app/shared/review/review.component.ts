import { Component, OnInit, Input} from '@angular/core';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviewList: any=[];

  constructor(private reviewservice: ReviewService) { }

  @Input() movieId:Number;
  page:Number=1;

 
  ngOnInit() {
    this.getmoviewReview(this.movieId,this.page);
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.getmoviewReview(this.movieId,this.page);
  }
  getmoviewReview(movieId,page){
    this.reviewservice.getMovieReview(movieId,page).subscribe((resp)=>{
      let list = JSON.parse(JSON.stringify(resp));
      this.reviewList=list.results;
    })
  }

}
