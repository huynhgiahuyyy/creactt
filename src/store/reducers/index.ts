import { combineReducers } from "redux";
import { reducer as productsReducer } from "./productsReducer";
import { reducer as productDetailReducer } from "./productDetailReducer";

const reducers = combineReducers({
  productsReducer,
  productDetailReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
