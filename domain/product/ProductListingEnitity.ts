import { ProductEnitity, ProductId } from "./ProductEnitity";

export class ProductListingEnitity {
  constructor(protected readonly _products: ProductEnitity[] = []) {}

  /* istanbul ignore next */
  get products() {
    return this._products;
  }

  get namesCardsLog() {
    return this._products.map((product) => product.name).join(" ");
  }
}
