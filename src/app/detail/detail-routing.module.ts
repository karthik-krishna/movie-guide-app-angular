import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';

const routes: Routes = [{
  path:  '',
  children: [
  {
    path: 'movie-detail/:id',
    component: MovieDetailComponent
  },{
    path: 'person/:id',
    component: PersonProfileComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
