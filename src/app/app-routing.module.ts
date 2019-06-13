import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'upcoming',
    loadChildren: './upcoming/upcoming.module#UpcomingModule'
  },
  {
    path: 'movie-detail/:id',
    loadChildren: './detail/detail.module#DetailModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
