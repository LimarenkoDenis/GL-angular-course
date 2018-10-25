import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent],
  exports: [CartComponent],
  providers: [CartService]
})
export class CartModule { }
