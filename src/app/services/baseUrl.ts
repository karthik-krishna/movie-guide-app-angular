import { Injectable, Inject} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  imageurl: string='https://image.tmdb.org/t/p';
 public url:string = 'https://api.themoviedb.org/3';

 public baseURL()
 {
  return this.url;
 }

 public baseImageURL()
 {
  return this.imageurl;
 }

  constructor() {}

}