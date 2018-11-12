import { AddToCart } from './../actions/cart.actions';
import { ProductService } from './product.service';
import { CartService } from './../cart/services/cart.service';
import { IProduct } from './../interfaces/product.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { scan, concatAll} from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { LoadProductss } from '../actions/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;
  public subscription: Subscription = new Subscription();
  public totalCount$: Observable<number>;
  public textSearch: string = '';
  public products: IProduct[] = [];
  public product = {
    "id": 0,
    "title": "Cola",
    "description": "descr",
    "photo": "http://thejizn.com/wp-content/uploads/2016/06/coca-cola-stash-can-12-oz-1_1.jpg",
    "price": 12,
    "type": "drink"
  }
  pi: number = 3.14;
  e: number = 2.718281828459045;

  public date: Date = new Date();
  public products$: Observable<IProduct[]>;
  constructor(
    private _store: Store<any>,
    private _cartService: CartService,
    private _productService: ProductService,
  ) { }

  ngOnInit() {
    this.isLoading$ = this._store.select('products', 'isLoading');
    this.products$ = this._store.select('products', 'data');
    this.getProducts({ pageIndex: 0, pageSize: 2 } as PageEvent);
  }


  public getProducts(data: PageEvent) {
    this._store.dispatch(new LoadProductss(data));
    // this.products$ = this._productService.getProducts(data);

  }

  public buy(product: IProduct): void {
    this._store.dispatch(new AddToCart(product));
    // this._cartService.addToCart(product);
  }

  public changePage(data: PageEvent): void {
    this.getProducts(data);
  }


  changeText(event: Event){
    this.textSearch = (event.target as any).value;
  }


  public ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
