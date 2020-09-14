import { ProductActionTypes } from "./types";
//import { Dispatch } from "redux";
import fetch from 'cross-fetch'
import { ShopifyProduct } from "../../models/Product";
import { Dispatch } from "redux";
//import { Dispatch } from "redux";

//export type AppThunk = ActionCreator<
  //ThunkAction<void, ApplicationState, null, AnyAction>
//>;

export type ProductsAction = FetchProducts | FetchProductsSuccess | FetchProductsError;

export function fetchRequestSuccess(products : ShopifyProduct[]) : FetchProductsSuccess {
  return {
      type: ProductActionTypes.FETCH_SUCCESS,
      payload: products
  };
}
export function fetchRequestError(message: string) : FetchProductsError {
  return {
      type: ProductActionTypes.FETCH_ERROR,
      message: message
  };
}

export interface FetchProducts {
  type: ProductActionTypes.FETCH_REQUEST;
}

export interface FetchProductsSuccess {
  type: ProductActionTypes.FETCH_SUCCESS;
  payload: ShopifyProduct[];
}

export interface FetchProductsError {
  type: ProductActionTypes.FETCH_ERROR;
  message: string;
}

/*
: ActionCreator<
ThunkAction<Promise<ProductsAction>,
ShopifyProduct[],
null,
ProductsAction>>
//: ThunkAction<any, any, any, Action>
*/
export const fetchProducts = () => {
  return async (dispatch : Dispatch<any>) => {
    let response = await fetch(`http://localhost:3000/shopify/products`)
    if (response.status !== 200) {
      return dispatch(fetchRequestError(response.statusText));
    }
    return dispatch(fetchRequestSuccess((await response.json()) as ShopifyProduct[]));
  }
}

 /* return async function (dispatch : Dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return fetch(`http://localhost:3000/shopify/products`)
      .then(
        response => {
          let products = response.json();
          return products;
        }
      )
      .then(x=> {
        return dispatch(fetchRequestSuccess(x as ShopifyProduct[]));
      })
      .catch(x=> {
        return dispatch(fetchRequestError(x as string));
      })
  }*/