import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface ProductsState {
  products: any | null;
  loading: boolean;
  error: string | null;
  productAdded: boolean;
  productEdited: boolean;
}

const initialState = {
  products: [],
  loading: false,
  error: null,
  productAdded: false,
  productEdited: false,
};

export const reducer = (state: ProductsState = initialState, action: Action): ProductsState => {
  switch (action.type) {
    case ActionType.SEARCH_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: null,
        products: [],
      };
    case ActionType.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case ActionType.SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
      };
    case ActionType.ADD_PRODUCT:
    case ActionType.EDIT_PRODUCT:
      return {
        ...state,
        loading: true,
        error: null,
        productAdded: false,
        productEdited: false,
      };
    case ActionType.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productAdded: true,
        products: [action.payload, ...state.products],
      };
    case ActionType.EDIT_PRODUCT_SUCCESS:
      const updatedProducts = state.products.map((product: any) => {
        if (product.id === +action.payload.id) {
          return action.payload;
        }
        return product;
      });

      console.log({ updatedProducts });

      return {
        ...state,
        loading: false,
        error: null,
        productEdited: true,
        products: updatedProducts,
      };
    case ActionType.ADD_PRODUCT_FAILURE:
    case ActionType.EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.RESET_PRODUCT_ACTION:
      return {
        ...state,
        productAdded: false,
        productEdited: false,
      };
    default:
      return state;
  }
};
