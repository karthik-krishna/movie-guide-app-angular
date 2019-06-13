import { Injectable, Inject } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../../services/baseUrl';

@Injectable({
    providedIn: 'root'
  })
export class UpcomingService {



    constructor(private http: HttpClient, private baseurl: ApiServiceService) { }

    getUpcomingMovies(page) {
        return this.http.get(this.baseurl.baseURL() + '/movie/upcoming?api_key=84c481f0a53d6c1b488b947bd25286ba&page='+page);
    }

    
}
