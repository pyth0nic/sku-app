export enum ProductPublishedScope {
    WEB = "web",
    GLOBAL = "global"
}
export enum ProductVariantWeightUnit {
    GRAMS = "g",
    KILOGRAMS = "kg",
    OUNCES = "oz",
    POUNDS = "lb"
}
export interface ProductVariant {
    barcode: string,
    compare_at_price: number,
    created_at: Date,
    fulfillment_service: string,
    grams: number,
    weight: number,
    weight_unit: ProductVariantWeightUnit,
    id: number,
    inventory_management: string,
    inventory_policy: string,
    inventory_quantity: number,
    option1: string,
    position: number,
    price: number,
    product_id: number,
    requires_shipping: boolean,
    sku: string,
    taxable: boolean,
    title: string,
    updated_at: Date
}
export interface ShopifyProductImagesImage {
    src: string;
}
export interface ShopifyProductMetafield {
    key: string;
    value: string;
    value_type?: string;
    namespace?: string;
}
export interface ShopifyProduct {
    body_html: string;
    created_at: Date;
    handle: string;
    id: string;
    images: ShopifyProductImagesImage[];
    options: string[];
    product_type: string;
    metafields: ShopifyProductMetafield[];
    published_at: Date;
    published_scope: ProductPublishedScope;
    tags: string;
    template_suffix: string;
    title: string;
    metafields_global_title_tag: string;
    metafields_global_description_tag: string;
    updated_at: Date;
    variants: ProductVariant[];
    vendor: string;
}