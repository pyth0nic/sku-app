import { ProductActionTypes } from "./types";
import fetch from 'cross-fetch'
import { ProductVariant, ShopifyProduct, ShopifyProductImagesImage } from "../../models/Product";
import { Dispatch } from "redux";

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

export const fetchProducts = () => {
  return async (dispatch : Dispatch<any>) => {
    let response = await fetch(`https://server-dot-elegant-expanse-288700.ts.r.appspot.com/shopify/products/`)
    if (response.status !== 200) {
      return dispatch(fetchRequestError(response.statusText));
    }
    let products=(await response.json()) as ShopifyProduct[];
    products.map(x=> {
      x.variants = [JSON.parse((x.variants[0] as any)) as ProductVariant];
      x.images = [JSON.parse((x.images[0] as any)) as ShopifyProductImagesImage]
      return x;
    })
    return dispatch(fetchRequestSuccess(products));
  }
}