import { ICart } from './../interfaces/product.interface';
import { CartActionTypes, CartActions } from './../actions/cart.actions';
import { Action } from '@ngrx/store';


export const initialState: ICart[]  = [];

export function reducer(state = initialState, action: CartActions): ICart[] {
  switch (action.type) {
    case CartActionTypes.AddToCart: {
      const index: number = state.findIndex(({id}) => id === action.payload.id);

      if ( index === -1) {
        return [...state, {...action.payload, amount: 1}];

      }

      return state;
    }
    default:
      return state;
  }
}
