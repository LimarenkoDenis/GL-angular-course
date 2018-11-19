import { Observable } from 'rxjs';
import { CartService } from './services/cart.service';
import { ICart } from './../interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectFeatureTotalSum } from '../selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [CartService]
})
export class CartComponent implements OnInit {
  // public cart: ICart[] = [];
  public cart$: Observable< ICart[]>;
  public totalSum$: Observable<number>;
  constructor(
    private _store: Store<any>,
    // private _cartService: CartService
  ) { }

  ngOnInit() {
    this.cart$ = this._store.pipe(select('cart'));
    this.totalSum$ = this._store.pipe(select(selectFeatureTotalSum));
    // this.cart$.subscribe(data => {
    //   data.
    // })
    // this.cart = this._cartService.getCart();
  }

}
