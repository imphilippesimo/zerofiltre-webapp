import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionComponent } from './solution.component';
import { ListingComponent } from './listing/listing.component';


@NgModule({
  declarations: [SolutionComponent, ListingComponent],
  imports: [
    CommonModule,
    SolutionRoutingModule
  ]
})
export class SolutionModule { }
