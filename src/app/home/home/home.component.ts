import { Component, OnInit  } from '@angular/core';
import { ListingService } from './listing-component.service';
import { ApiServiceService } from 'src/app/services/baseUrl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  base: string;
  showspinner: boolean;
  listOfMovies: any[];
  totalItems:number;
  nowplaying:boolean=true;
  currentPage = 1;
  currentPageSearch=1;
  page: number=1;
  pageSearch : number=1;
  searchKey:string;
  listView: boolean;
  
  constructor(private listingservice:ListingService,private baseurl: ApiServiceService) { }
  
  ngOnInit() {
    this.base=this.baseurl.baseImageURL();
    this.nowPlaying();
  }

 
  pageChanged(event: any): void {
    if(this.nowplaying){
    this.page = event.page;
    this.nowPlaying()
    }else{
    this.pageSearch = event.page;
      this.submitSearch()
    }
    
  }

  nowPlaying(){
    
    this.showspinner=true;
    this.listOfMovies=[];
    this.listingservice.getNowplayingMovies(this.page).subscribe((resp)=>{
     
      let list= JSON.parse(JSON.stringify(resp))
      if (list!=undefined) {
        setTimeout(() => {
          this.showspinner=false;
          this.listOfMovies=list.results;
          this.totalItems=(list.total_results/20) <=1000 ? list.total_results : 20000 ;
        }, 1500);
        
      }else{
        setTimeout(() => {
          this.showspinner=false;
          this.listOfMovies=[];
        }, 2000);        
      }
      
    })
  }

  submitSearch(){
    this.nowplaying=false;
    this.showspinner=true;
    this.listOfMovies=[];
    this.searchKey.split(' ').join('+');
    this.listingservice.getMovies(this.searchKey,this.pageSearch).subscribe((resp)=>{
     
      let list= JSON.parse(JSON.stringify(resp))
      if (list!=undefined) {
        setTimeout(() => {
          this.showspinner=false;
          this.listOfMovies=list.results;
          this.totalItems=(list.total_results/20) <=1000 ? list.total_results : 20000 ;
        }, 2000);
        
      }else{
        setTimeout(() => {
          this.showspinner=false;
          this.listOfMovies=[];
        }, 2000);        
      }
      
    })
  }

  listandGridView(param:string){
    if (param=='list') {
      this.listView=true;
    } else {
      this.listView=false;      
    }
  }
}
