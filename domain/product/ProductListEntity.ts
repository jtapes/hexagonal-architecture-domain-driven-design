import { ProductEntity, ProductId } from "./ProductEntity";

export class ProductListEntity {
  constructor(protected readonly _products: ProductEntity[] = []) {}

  /* istanbul ignore next */
  get products() {
    return this._products;
  }

  get namesCardsLog() {
    return this._products.map((product) => product.name).join(" ");
  }
}
