
import Products from '../../components/products/products';
import * as actions from './actions';
import { ProductState } from './types';
import { connect } from 'react-redux';
//import { Dispatch } from "redux";

export function mapStateToProps({  data, loading, errors }: ProductState) {
  return {
    data,
    loading,
    errors
  };
}

export function mapDispatchToProps(dispatch: any) {
    console.log("HEREHERHE")
  return {
    fetchProducts: () => dispatch(actions.fetchProducts())
  };
}

//export const ConnectedProducts = () =>
 connect(mapStateToProps, mapDispatchToProps)(Products);