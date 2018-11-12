import { IProduct } from 'src/app/interfaces/product.interface';
import { Action } from '@ngrx/store';

export enum CartActionTypes {
  AddToCart = '[Cart] AddToCart',
  DeleteFromCartToCart = '[Cart] DeleteFromCartToCart'
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.AddToCart;
  public constructor(public payload: IProduct){ }
}

export class DeleteToCart implements Action {
  readonly type = CartActionTypes.DeleteFromCartToCart;
  public constructor(public payload: string) { }
}

// new AddToCart({ title: ''})

// { type: '[Cart] AddToCart', payload:  { title: ''} }

export type CartActions = AddToCart | DeleteToCart;
