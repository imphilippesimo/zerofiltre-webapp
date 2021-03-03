import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './';


@NgModule({
  declarations: [...fromComponents.components, ...fromComponents.directives],
  imports: [
    CommonModule
  ],
  exports: [
    ...fromComponents.components,
    ...fromComponents.directives
  ]
})
export class SharedModule { }
