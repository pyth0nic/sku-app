import { Body, Controller, Delete, Get, Param, Post, Put } from "routing-controllers";
import { ShopifyCache } from "../services/product/ShopifyCache";


@Controller()
export class ShopifyController {

    constructor(private shopifyCache: ShopifyCache) {

    }

    @Get("/shopify/products")
    public async getAll(): Promise<any> {
        return await this.shopifyCache.listProducts();
    }

    @Post("/shopify/products/saveAll")
    public async saveAll(): Promise<void> {
        await this.shopifyCache.saveProducts();
    }
}
