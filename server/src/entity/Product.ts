import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

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
    barcode: string;
    compare_at_price: number;
    created_at: Date;
    fulfillment_service: string;
    grams: number;
    weight: number;
    weight_unit: ProductVariantWeightUnit;
    id: number;
    inventory_management: string;
    inventory_policy: string;
    inventory_quantity: number;
    option1: string;
    position: number;
    price: number;
    product_id: number;
    requires_shipping: boolean;
    sku: string;
    taxable: boolean;
    title: string;
    updated_at: Date;
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
export interface ShopifyProductEndpointsCountParams {
    vendor?: string;
    product_type?: string;
    collection_id?: number;
    created_at_min?: Date;
    created_at_max?: Date;
    updated_at_min?: Date;
    updated_at_max?: Date;
    published_at_min?: Date;
    published_at_max?: Date;
    published_status?: "published" | "unpublished" | "any";
}
export type ShopifyProductsEndpointsCreateParams = any;
export type ShopifyProductEndpointsGetParams = any;
export type ShopifyProductEndpointsListParams = any;
export interface ShopifyProductEndpointsUpdateParams {
    product: any;
}

@Entity()
export class Product extends BaseEntity {

    @Column()
    public body_html: string;

    @Column({ type: "text" })
    public created_at: Date;

    @Column({ default: null, nullable: true })
    public handle: string;

    @PrimaryColumn()
    public id: string;

    @Column("text", { array: true })
    public images: ShopifyProductImagesImage[];

    @Column("text", { array: true, default: null, nullable: true })
    public options: string[];

    @Column({ default: null, nullable: true })
    public product_type: string;

    @Column("text", { array: true, default: null, nullable: true })
    public metafields: ShopifyProductMetafield[];

    @Column()
    public published_at: Date;

    @Column("text")
    public published_scope: ProductPublishedScope;

    @Column({ default: null, nullable: true })
    public tags: string;

    @Column()
    public template_suffix: string;

    @Column()
    public title: string;

    @Column({ default: null, nullable: true })
    public metafields_global_title_tag: string;

    @Column({ default: null, nullable: true })
    public metafields_global_description_tag: string;

    @Column()
    public updated_at: Date;

    @Column("text", { array: true })
    public variants: ProductVariant[];

    @Column({ default: null, nullable: true })
    public vendor: string;
}
