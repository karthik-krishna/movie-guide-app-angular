import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/baseUrl';
import { PersonService } from './person.service';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from './IPerson';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {
  person: IPerson;
  personId: string;
  castCredits: any[]=[];
  crewCredits: any[]=[];

  constructor(private baseurl: ApiServiceService,private personService:PersonService, private route:ActivatedRoute) { }
  base=this.baseurl.baseImageURL();
  ngOnInit() {
    this.personId=this.route.snapshot.params.id;
    this.getPersonDetail(this.personId);
    this.getCreditsofPerson(this.personId);
  }

  getPersonDetail(personId:string) {
    this.personService.getPersonDetails(personId).subscribe((resp) => {
      let response = JSON.parse(JSON.stringify(resp))
      if (response != undefined) {
        this.person=JSON.parse(JSON.stringify(response));
      }
    })
  }

  getCreditsofPerson(personId:string) {
    this.personService.getCredits(personId).subscribe((resp) => {
      let response = JSON.parse(JSON.stringify(resp))
      if (response != undefined) {
        this.castCredits=response.cast.reverse();
        this.crewCredits=response.crew.reverse();
      }
    })
  }

}
