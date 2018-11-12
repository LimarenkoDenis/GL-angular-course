import { Action } from '@ngrx/store';
import { IProduct } from '../interfaces/product.interface';
import { PageEvent } from '@angular/material/paginator';

export enum ProductsActionTypes {
  LoadProductss = '[Products] Load Productss',
  LoadProductssSuccess = '[Products] LoadProductssSuccess',
  LoadProductssError = '[Products] LoadProductssError',
}

export class LoadProductss implements Action {
  readonly type = ProductsActionTypes.LoadProductss;
  public constructor(public payload: PageEvent) { }
}

export class LoadProductssSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductssSuccess;
  public constructor(public payload: IProduct[]) { }
}

export class LoadProductssError implements Action {
  readonly type = ProductsActionTypes.LoadProductssError;
  public constructor(public payload: string) { }
}

export type ProductsActions = LoadProductss | LoadProductssSuccess | LoadProductssError;
