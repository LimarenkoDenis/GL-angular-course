import { Observable } from 'rxjs';
import { CartService } from './services/cart.service';
import { ICart } from './../interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [CartService]
})
export class CartComponent implements OnInit {
  // public cart: ICart[] = [];
  public cart$: Observable< ICart[]>;

  constructor(
    private _store: Store<any>,
    // private _cartService: CartService
  ) { }

  ngOnInit() {
    this.cart$ = this._store.select('cart');
    // this.cart = this._cartService.getCart();
  }

}
