import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [ProductsComponent, ProductDetailComponent],
  exports: [ProductsComponent, ProductDetailComponent],
  providers: [ProductService, { provide: 'api', useValue: environment.api }]
})
export class ProductsModule { }
