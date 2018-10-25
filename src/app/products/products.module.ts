import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  providers: [ProductService, { provide: 'api', useValue: environment.api }]
})
export class ProductsModule { }
