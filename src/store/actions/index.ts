import { ActionType } from "../action-types";

interface SearchProductsAction {
  type: ActionType.SEARCH_PRODUCTS;
}

interface SearchProductsSuccessAction {
  type: ActionType.SEARCH_PRODUCTS_SUCCESS;
  payload: string[];
}

interface SearchProductsFailureAction {
  type: ActionType.SEARCH_PRODUCTS_FAILURE;
  payload: string | null;
}

interface GetPackageAction {
  type: ActionType.SEARCH_PRODUCT_DETAIL;
}

interface GetProductSuccessAction {
  type: ActionType.SEARCH_PRODUCT_DETAIL_SUCCESS;
  payload: string[];
}

interface GetPackageFailureAction {
  type: ActionType.SEARCH_PRODUCT_DETAIL_FAILURE;
  payload: string | null;
}

interface FetchPackage {
  type: ActionType.FETCH_PRODUCT;
}

interface FetchProductSuccess {
  type: ActionType.FETCH_PRODUCT_SUCCESS;
  payload: any | null;
}

interface FetchPackageFailure {
  type: ActionType.FETCH_PRODUCT_FAILURE;
  payload: string | null;
}

interface AddProduct {
  type: ActionType.ADD_PRODUCT;
  payload?: any;
}

interface AddProductSuccess {
  type: ActionType.ADD_PRODUCT_SUCCESS;
  payload: any;
}

interface AddProductFailure {
  type: ActionType.ADD_PRODUCT_FAILURE;
  payload: any;
}

interface EditProduct {
  type: ActionType.EDIT_PRODUCT;
  payload?: any;
}

interface EditProductSuccess {
  type: ActionType.EDIT_PRODUCT_SUCCESS;
  payload?: any;
}

interface EditProductFailure {
  type: ActionType.EDIT_PRODUCT_FAILURE;
  payload: any;
}

interface ResetProductAction {
  type: ActionType.RESET_PRODUCT_ACTION;
}

interface ResetProductEdit {
  type: ActionType.RESET_PRODUCT_EDIT;
}

export type Action = SearchProductsAction |
  SearchProductsSuccessAction |
  SearchProductsFailureAction |
  GetPackageAction |
  GetProductSuccessAction |
  GetPackageFailureAction |
  FetchPackage |
  FetchProductSuccess |
  FetchPackageFailure |
  AddProduct |
  AddProductSuccess |
  AddProductFailure |
  EditProduct |
  EditProductSuccess |
  EditProductFailure |
  ResetProductAction |
  ResetProductEdit;


