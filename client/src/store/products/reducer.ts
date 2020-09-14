import { Reducer } from "redux";
import { ProductActionTypes, ProductState } from "./types";

export const initialState: ProductState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<ProductState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_REQUEST: {
      console.log("HERE HAHA")
      return { ...state, loading: true };
    }
    case ProductActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action);
      return { ...state, loading: false, data: action.payload };
    }
    case ProductActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export { reducer as ProductReducer };