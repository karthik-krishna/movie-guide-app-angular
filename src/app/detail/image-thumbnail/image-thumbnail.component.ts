import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/services/baseUrl';

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.css']
})
export class ImageThumbnailComponent implements OnInit {
  base: string;

  constructor(private baseurl: ApiServiceService) { }
  @Input() movie:any;
  ngOnInit() {
    this.base=this.baseurl.baseImageURL();
  }

}
