import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const resetProductAction = () => ({
  type: ActionType.RESET_PRODUCT_ACTION,
});
export const resetProductEdit = () => ({
  type: ActionType.RESET_PRODUCT_EDIT,
});

export const addProduct = (data: any) => {
  const url = `https://fakestoreapi.com/products`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_PRODUCT,
    });

    try {
      const response = await axios.post(url, data);
      console.log(response);

      dispatch({
        type: ActionType.ADD_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.ADD_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const editProduct = (data: any) => {
  const url = `https://fakestoreapi.com/products/${data.id}`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.EDIT_PRODUCT,
    });

    try {
      const response = await axios.put(url, data);
      console.log(response);

      dispatch({
        type: ActionType.EDIT_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.EDIT_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchProductData = () => {
  const url = `https://fakestoreapi.com/products`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_PRODUCT,
    });

    try {
      const response = await axios.get(url);

      dispatch({
        type: ActionType.FETCH_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchProducts = () => {
  const url = `https://fakestoreapi.com/products`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PRODUCTS,
    });

    try {
      const response = await axios.get(url);

      dispatch({
        type: ActionType.SEARCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const getProductDetail = (id: string) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_PRODUCT,
    });

    try {
      const response = await axios.get(url);

      dispatch({
        type: ActionType.FETCH_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };
};
