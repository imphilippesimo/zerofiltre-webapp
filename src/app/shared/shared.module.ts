import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu/dropdown-menu.component';


@NgModule({
  declarations: [...fromComponents.components, ...fromComponents.directives, DropdownMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ...fromComponents.components,
    ...fromComponents.directives
  ]
})
export class SharedModule { }
