import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCart from './cart.reducer';
import * as fromProducts from './products.reducer';

import { ICart } from '../interfaces/product.interface';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  cart: ICart[];
  products: fromProducts.State;
  router: any;
}

export const reducers: ActionReducerMap<State> = {
  cart: fromCart.reducer,
  products: fromProducts.reducer,
  router: routerReducer
};

export const selectFeature = (state: State) => state.cart;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: ICart[], props) => state.length + props.multiply
);


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
