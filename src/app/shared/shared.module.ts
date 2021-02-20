import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './';
import { BackToTopComponent } from './back-to-top/back-to-top.component';



@NgModule({
  declarations: [...fromComponents.components, BackToTopComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ...fromComponents.components
  ]
})
export class SharedModule { }
