import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class ProductsModule { }
