import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/app/services/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient, private baseurl: ApiServiceService) { }

  getPersonDetails(personId) {
      return this.http.get(this.baseurl.baseURL() + '/person/'+personId+'?api_key=84c481f0a53d6c1b488b947bd25286ba');
  }

  getCredits(personId) {
      return this.http.get(this.baseurl.baseURL() + '/person/'+personId+'/movie_credits?api_key=84c481f0a53d6c1b488b947bd25286ba');
  }
}
