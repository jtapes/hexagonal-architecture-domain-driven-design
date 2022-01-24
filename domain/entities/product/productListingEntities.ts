import { ProductEntities, ProductId } from "./productEntities";

export class ProductListingEntities {
  constructor(protected readonly _products: ProductEntities[] = []) {}

  /* istanbul ignore next */
  get products() {
    return this._products;
  }

  get namesCardsLog() {
    return this._products.map((product) => product.name).join(" ");
  }
}
