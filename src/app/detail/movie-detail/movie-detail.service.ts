import { Injectable, Inject } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../../services/baseUrl';

@Injectable({
    providedIn: 'root'
  })
export class Detailservice {



    constructor(private http: HttpClient, private baseurl: ApiServiceService) { }

    getMovieDetails(movieId) {
        return this.http.get(this.baseurl.baseURL() + '/movie/'+movieId+'?api_key=84c481f0a53d6c1b488b947bd25286ba&append_to_response=videos');
    }

    getSimilarMovies(movieId) {
        return this.http.get(this.baseurl.baseURL() + '/movie/'+movieId+'/similar?api_key=84c481f0a53d6c1b488b947bd25286ba');
    }

    getMovieCredits(movieId) {
        return this.http.get(this.baseurl.baseURL() + '/movie/'+movieId+'/credits?api_key=84c481f0a53d6c1b488b947bd25286ba');
    }

    
}
