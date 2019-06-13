import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UpcomingRoutingModule } from './upcoming-routing.module';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SharedModule } from '../shared/shared.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [UpcomingComponent],
  imports: [
    CommonModule,
    UpcomingRoutingModule,
    SharedModule,
    FormsModule,
    PaginationModule.forRoot()
    
  ]
})
export class UpcomingModule { }
