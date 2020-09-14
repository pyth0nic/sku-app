import { Container, Service } from "typedi";
import { ShopifyClientConfig } from "../product/ShopifyClient";

@Service()
export class ShopifyConfig {
  public config: ShopifyClientConfig;
  constructor() {
    this.config = {
        apiKey: "asd",
        apiVersion: "2020-07",
        password: "shppa",
        shopName: "skut"
    };
  }
}
