import React from 'react';
import { ShopifyProduct } from '../../models/Product';
import './product.scss';
import logo from '../../logo.svg';

export interface ProductProps {
    product: ShopifyProduct;
}
  
export default function Product({ product }: ProductProps) {
    let date = new Date();

    return (
        <div className="product">
            <div className="product-title">
            <div>{product.handle} - {"Product Id"}</div>
            <div>{date.toISOString()}</div>
            </div>
            <div className="product-wrapper">
                <div className="product-info">
                <div className="product-card">
                    <div className="product-stock">
                    <div className="sku">
                        <p>Stock - {10} SKU ID</p>
                    </div>
                    <div className="sku-info">
                        <div className="title"><strong>${99} - {"desciprtion"}</strong></div>
                        <p>{"lorem iptsum"}</p>
                        <div><strong>{"Requires shipping"}</strong></div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="product-picture">
                <img src={logo} className="picture" alt="logo" />
                </div>
            </div>
        </div>
    );
}