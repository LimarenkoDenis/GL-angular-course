import { ProductsActionTypes, ProductsActions } from './../actions/products.actions';
import { IProduct } from './../interfaces/product.interface';
import { Action } from '@ngrx/store';


export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  data: IProduct[];
  error: null | string;
}

export const initialState: State = {
  isLoading: false,
  isLoaded: false,
  data: [],
  error: null,
};

export function reducer(state = initialState, action: ProductsActions): State {
  switch (action.type) {
    case ProductsActionTypes.LoadProductss: {
      return {
        ...state,
        isLoading: true
      };
    }

    case ProductsActionTypes.LoadProductssSuccess: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}
