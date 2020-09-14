import fetch from "node-fetch";
import { Service, Inject } from "typedi";
import { ShopifyConfig } from "../config/ShopifyConfig";
import { InjectManager} from "typeorm-typedi-extensions";
import { EntityManager} from "typeorm";
import { IShopifyProductEndpoints, ShopifyClientConfig,
            ShopifyProduct, ShopifyProductEndpointsCountParams,
            ShopifyProductEndpointsGetParams, ShopifyProductEndpointsListParams,
            ShopifyProductEndpointsUpdateParams, ShopifyProductsEndpointsCreateParams } from "./ShopifyClient";
import { Product } from "../../entity/Product";

@Service()
export class ShopifyProductEndpoints implements IShopifyProductEndpoints {

    private config: ShopifyClientConfig;

    constructor(@InjectManager() private manager: EntityManager, private configService: ShopifyConfig) {
        this.config = configService.config;
    }

    public count(params?: ShopifyProductEndpointsCountParams): number {
        return 1;
    }

    public create(params: ShopifyProductsEndpointsCreateParams): any {
        return;
    }

    public delete(id: string): void {
        return;
    }

    public get(id: string, params?: ShopifyProductEndpointsGetParams): { products: ShopifyProduct[] } {
        return { products: [] as ShopifyProduct[] };
    }

    public async list(params?: ShopifyProductEndpointsListParams): Promise<ShopifyProduct[]> {
        const products = fetch(this.url("products"))
            .then((res: any) => res.json())
            .then((res: any) => res as ShopifyProduct[]);

        return products;
    }

    public update(id: string, params?: ShopifyProductEndpointsUpdateParams): { product: ShopifyProduct } {
        return null;
    }

    private url(resource: string): string {
        const url: string = `https://${this.config.apiKey}:${this.config.password}@${this.config.shopName}` +
        `.myshopify.com/admin/api/${this.config.apiVersion}/${resource}.json`;
        return url;
    }
}
