import React from 'react';
import Product from '../product/product';
import { ShopifyProduct } from '../../models/Product';

import * as actions from '../../store/products/actions';
import { ProductState } from '../../store/products/types';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';

export interface ProductProps {
    fetchProducts: () => Promise<void>;
    data: ShopifyProduct[];
    loading?: boolean
}

export function Products({ data, loading, fetchProducts }: ProductProps) {
    if (data.length === 0) {
        fetchProducts();
        return (<p>no products {loading}</p>);
    }

    return (
        <div className="products">
            {data.map(prod=> (<Product product={prod}></Product>) )}
        </div>
    )
}

export function mapStateToProps(state: ApplicationState) {
    let products : ProductState = state.products;
    return {
        ...products
    };
  }
  
  export function mapDispatchToProps(dispatch: any, getState: any) {
    return {
      fetchProducts: async () => {
       actions.fetchProducts()(dispatch);
       console.log(getState)
      }
    };
  }
  
  //export default Products;
  export default connect(mapStateToProps, mapDispatchToProps)(Products);