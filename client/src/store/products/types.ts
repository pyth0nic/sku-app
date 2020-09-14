import { ShopifyProduct } from '../../models/Product';

export enum ProductActionTypes {
    FETCH_REQUEST = "@@products/FETCH_REQUEST",
    FETCH_SUCCESS = "@@products/FETCH_SUCCESS",
    FETCH_ERROR = "@@products/FETCH_ERROR"
  }
export interface ProductState {
    readonly loading: boolean;
    readonly data: ShopifyProduct[];
    readonly errors?: string;
}