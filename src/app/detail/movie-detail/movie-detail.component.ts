import { Component, OnInit } from '@angular/core';
import { Detailservice } from './movie-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiServiceService } from '../../services/baseUrl';
import {IMovieDetailResponse} from './IMovieDetailResponse'
import { TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  similarMovies: any[]=[];
  trailers: any=[];
  detail: IMovieDetailResponse = {} as IMovieDetailResponse;
  movieId:string
  showspinner: boolean;
  base:string;
  showReview: boolean;
  cast: any=[];
  crew: any=[];
  constructor(private router: Router,private detailService:Detailservice, private route:ActivatedRoute, private sanitizer:DomSanitizer,private baseurl: ApiServiceService) {
    this.movieId=this.route.snapshot.params.id;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {
    this.base=this.baseurl.baseImageURL();
    let detail= JSON.parse(localStorage.getItem(this.movieId))
    if(detail==undefined || detail==null){
      this.getumovieDetail();
    }else{
      this.detail=detail;
      this.trailers=this.detail.videos.results;
    }
    this.getCastandCrew()
  }
  getumovieDetail() {
    this.showspinner = true;
    this.detailService.getMovieDetails(this.movieId).subscribe((resp) => {

      let response = JSON.parse(JSON.stringify(resp))
      if (response != undefined) {
        this.showspinner = false;
        this.detail=JSON.parse(JSON.stringify(response));
        this.trailers=this.detail.videos.results;
        localStorage.setItem(this.movieId,JSON.stringify(this.detail));
      } else {
        this.showspinner = false;
      }

    })
  }

  onSelect(data: TabDirective) {
    console.log(data)
    if(data.heading=='Similar Movies'){
      this.getsimilarMovies()
    }else if(data.heading=='Reviews & Critics'){
      this.showReview=true;
    }
  }

  getsimilarMovies() {
    if (this.similarMovies.length==0) {
      this.detailService.getSimilarMovies(this.movieId).subscribe((resp) => {
        let response = JSON.parse(JSON.stringify(resp))
        if (response != undefined) {
          this.similarMovies=response.results
        }
      })
    }    
  }

  getCastandCrew() {
      this.detailService.getMovieCredits(this.movieId).subscribe((resp) => {
        let response = JSON.parse(JSON.stringify(resp))
        if (response != undefined) {
          this.cast=response.cast;
          this.crew=response.crew;
        }
      }) 
  }

  getembededUrl(trailer){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+trailer.key)
  }



}
