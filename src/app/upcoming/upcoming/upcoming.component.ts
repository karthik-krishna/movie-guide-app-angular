import { Component, OnInit } from '@angular/core';
import { UpcomingService } from './upcoming.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {


  totalItems: any;
  listOfMovies: any;
  showspinner: boolean;
  listView: boolean;
  constructor(private upcomingservice: UpcomingService) { }

  ngOnInit() {
    this.getupcomingMovies()
  }

  currentPage = 1;
  page: number = 1;

  pageChanged(event: any): void {
    this.page = event.page;
    this.getupcomingMovies();
  }

  getupcomingMovies() {
    this.showspinner = true;
    this.listOfMovies=[];
    this.upcomingservice.getUpcomingMovies(this.page).subscribe((resp) => {

      let list = JSON.parse(JSON.stringify(resp));
      if (list != undefined) {
        setTimeout(() => {
          this.showspinner = false;
          this.listOfMovies = list.results;
          this.totalItems = (list.total_results / 20) <= 1000 ? list.total_results : 20000;
        }, 1500);

      } else {
        setTimeout(() => {
          this.showspinner = false;
          this.listOfMovies = [];
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
