import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SharedModule } from '../shared/shared.module';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    DetailRoutingModule,
    TabsModule.forRoot()
  ]
})
export class DetailModule { }
