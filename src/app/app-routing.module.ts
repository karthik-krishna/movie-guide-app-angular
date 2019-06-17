import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./upcoming/upcoming.module').then(m => m.UpcomingModule)
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
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
