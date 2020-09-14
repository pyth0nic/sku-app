
import { InjectManager} from "typeorm-typedi-extensions";
import { EntityManager} from "typeorm";
import { Service } from "typedi";
import { Product, ShopifyProduct } from "../../entity/Product";
import { ShopifyProductEndpoints } from "./ShopifyEndpoint";

@Service()
export class ShopifyCache {
    constructor(@InjectManager() private manager: EntityManager,
                private endPointService : ShopifyProductEndpoints) {
    }

    public async saveProducts() : Promise<void> {
        let products : any = await this.endPointService.list();
        global.console.log(products, typeof products)
        products.products.map((x : ShopifyProduct) => {
            let p = new Product();
            p.body_html = x.body_html;
            p.created_at = x.created_at;
            p.handle = x.handle;
            p.id = x.id;
            p.images = x.images;
            p.options = x.options;
            p.product_type = x.product_type;
            p.metafields = x.metafields;
            p.published_at = x.published_at;
            p.published_scope = x.published_scope;
            p.tags = x.tags;
            p.template_suffix = x.template_suffix;
            p.title = x.title;
            p.metafields_global_title_tag = x.metafields_global_title_tag;
            p.metafields_global_description_tag = x.metafields_global_description_tag;
            p.updated_at = x.updated_at;
            p.variants = x.variants;
            p.vendor = x.vendor;
            return p;
        }).forEach(async (x : Product)=> {
            try {
                await this.manager.save(x);
            } catch(e) {
                global.console.log("ERror", e)
            }
            return x;
        });
    }

    public async listProducts() : Promise<ShopifyProduct[]> {
        let products = await this.manager.find(Product);
        return products.map(x=> {
            let p = {} as ShopifyProduct;
            p.body_html = x.body_html;
            p.created_at = x.created_at;
            p.handle = x.handle;
            p.id = x.id;
            p.images = x.images;
            p.options = x.options;
            p.product_type = x.product_type;
            p.metafields = x.metafields;
            p.published_at = x.published_at;
            p.published_scope = x.published_scope;
            p.tags = x.tags;
            p.template_suffix = x.template_suffix;
            p.title = x.title;
            p.metafields_global_title_tag = x.metafields_global_title_tag;
            p.metafields_global_description_tag = x.metafields_global_description_tag;
            p.updated_at = x.updated_at;
            p.variants = x.variants;
            p.vendor = x.vendor;
            return p;
        })
    }
}