import { combineReducers } from "redux";

import { ProductReducer } from "./products/reducer";
import { ProductState } from "./products/types";

export interface ApplicationState {
  products: ProductState;
}

export const createRootReducer = () =>
  combineReducers({
    products: ProductReducer
  });