import React from 'react';
import { ShopifyProduct } from '../../models/Product';
import './product.scss';
import { startCase } from 'lodash';

export interface ProductProps {
    product: ShopifyProduct;
}
  
export default function Product({ product }: ProductProps) {
    let date = new Date();

    return (
        <div className="product">
            <div className="product-title">
            <div>{startCase(product.handle)} - {product.id}</div>
            <div>{date.toISOString()}</div>
            </div>
            <div className="product-wrapper">
                <div className="product-info">
                <div className="product-card">
                    <div className="product-stock">
                    <div className="sku">
                        <p>Stock - {product.variants[0].inventory_quantity} SKU ID</p>
                    </div>
                    <div className="sku-info">
                        <div className="title"><strong>${product.variants[0].price}</strong></div>
                        <div style={{maxHeight:'4em', overflow: 'hidden'}} dangerouslySetInnerHTML={{ __html: product.body_html }}></div>
                        <br/>
                        <div><strong>{ product.variants[0].requires_shipping ? "Requires shipping" : ""}</strong></div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="product-picture">
                <img src={product.images[0].src} className="picture" alt="logo" />
                </div>
            </div>
        </div>
    );
}