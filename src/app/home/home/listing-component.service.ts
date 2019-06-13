import { Injectable, Inject } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../../services/baseUrl';

@Injectable({
    providedIn: 'root'
  })
export class ListingService {



    constructor(private http: HttpClient, private baseurl: ApiServiceService) { }

    getMovies(formData,page) {
        return this.http.get(this.baseurl.baseURL() + '/search/movie?api_key=84c481f0a53d6c1b488b947bd25286ba&query='+formData+'&page='+page);
    }

    getNowplayingMovies(page) {
        return this.http.get(this.baseurl.baseURL() + '/movie/now_playing?api_key=84c481f0a53d6c1b488b947bd25286ba&page='+page);
    }

    
}
