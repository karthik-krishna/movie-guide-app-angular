import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ReviewComponent } from './review/review.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [MovieCardComponent, ProgressbarComponent, ReviewComponent, LoadingComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[MovieCardComponent, ProgressbarComponent, ReviewComponent, LoadingComponent]
})
export class SharedModule { }
