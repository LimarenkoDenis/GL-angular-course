import { ICart } from 'src/app/interfaces/product.interface';
import { State } from './../reducers';
import { createSelector } from '@ngrx/store';


export const selectFeatureCart = (state: State) => state.cart;
export const selectFeatureProducts = (state: State) => state.products;


export const selectFeatureTotalSum = createSelector(
  selectFeatureCart,
  selectFeatureProducts,
  (state: ICart[], products: any) => state.reduce((acc: number, next: ICart) =>  acc + next.amount * next.price , 0)
);
