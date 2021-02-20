import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecimenRoutingModule } from './specimen-routing.module';
import { SpecimenComponent } from './specimen.component';


@NgModule({
  declarations: [SpecimenComponent],
  imports: [
    CommonModule,
    SpecimenRoutingModule
  ]
})
export class SpecimenModule { }
