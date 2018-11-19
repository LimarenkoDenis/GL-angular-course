import { ProductsActionTypes, ProductsActions } from './../actions/products.actions';
import { IProduct } from './../interfaces/product.interface';
import { Action } from '@ngrx/store';


export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  data: IProduct[];
  error: null | string;
}

export const initialState: any = {
  isLoading: false,
  isLoaded: false,
  data: [],
  entitis: {},
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
        entitis:action.payload.reduce((acc: any, next: any) =>  ({ ...acc, ...{[next.id]:  next} }), {}) as any
      };
    }
    default:
      return state;
  }
}

