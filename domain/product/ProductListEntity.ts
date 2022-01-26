import { ProductEntity } from "./ProductEntity";

export class ProductListEntity {
  constructor(protected readonly _products: ProductEntity[] = []) {}

  /* istanbul ignore next */
  get products() {
    return this._products;
  }

  get namesLog() {
    return this._products.map((product) => product.name).join(" ");
  }
}
