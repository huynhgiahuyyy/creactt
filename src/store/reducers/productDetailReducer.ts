import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface ProductState {
  counter: number;
  loading: boolean;
  error: string | null;
  productData: any;
  productEdited: boolean;
}

const initialState: ProductState = {
  counter: 0,
  loading: false,
  error: null,
  productData: null,
  productEdited: false,
};

export const reducer = (state: ProductState = initialState, action: Action): ProductState => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCT:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case ActionType.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productData: action.payload,
        productEdited: false,
      };
    case ActionType.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.RESET_PRODUCT_EDIT:
      return {
        ...state,
        productEdited: false,
      };
    default:
      return state;
  }
};
