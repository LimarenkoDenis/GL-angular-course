import { AclDirective } from './directives/acl.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterPipe, AclDirective],
  exports: [FilterPipe, AclDirective]
})
export class SharedModule { }
