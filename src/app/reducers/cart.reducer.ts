import { ICart, IProduct } from './../interfaces/product.interface';
import { CartActionTypes, CartActions } from './../actions/cart.actions';
import { Action } from '@ngrx/store';


export const initialState: ICart[] = [];

export function reducer(state = initialState, action: CartActions): ICart[] {
  switch (action.type) {
    case CartActionTypes.AddToCart: {
      const newState: ICart[] = state.slice();
      const product: IProduct = action.payload;
      const index: number = newState.findIndex((item: ICart) => item.id === product.id);

      if (index === -1) {
        return [...newState, { ...product, amount: 1 }];
      }

      const element: ICart = newState[index];
      newState.splice(index, 1, { ...element, amount: element.amount + 1 });
      return newState;
    }

    default:
      return state;
  }
}

