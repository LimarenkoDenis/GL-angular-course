import { Injectable } from '@angular/core';
import { ICart, IProduct } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: ICart[] = []
  constructor() { }

  public addToCart(product: IProduct): void {
    // if
    this._cart.push({...product, amount: 1});
  }


  public getCart(): ICart[] {
    return this._cart;
  }
}
