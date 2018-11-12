import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductsActionTypes, LoadProductss, LoadProductssSuccess, LoadProductssError } from './../actions/products.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ProductService } from '../products/product.service';


@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProductss),
    mergeMap((action: LoadProductss) =>
      this._productService.getProducts(action.payload).pipe(
        // If successful, dispatch success action with result
        map((data: IProduct[]) => new LoadProductssSuccess(data)),
        // If request fails, dispatch failed action
        catchError(() => of(new LoadProductssError('server errro')))
      )
    )
  );

  constructor(
    private _productService: ProductService,
    private actions$: Actions
  ) {}
}
