import { Component, OnInit, Input, OnChanges,SimpleChanges } from '@angular/core';
import { ApiServiceService } from '../../services/baseUrl';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  constructor(private baseurl: ApiServiceService) { }

  @Input() movie: any;
  base=this.baseurl.baseImageURL()
 

  ngOnInit() {
  }

}
