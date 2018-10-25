import { CartService } from './services/cart.service';
import { ICart } from './../interfaces/product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [CartService]
})
export class CartComponent implements OnInit {
  public cart: ICart[] = [];

  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this._cartService.getCart();
  }

}
