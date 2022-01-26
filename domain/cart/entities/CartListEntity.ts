import { ProductListEntity } from "../../product/ProductListEntity";
import { ProductEntity, ProductId } from "../../product/ProductEntity";
export class CartListEntity extends ProductListEntity {
  addProduct(product: ProductEntity): ProductListEntity {
    this._products.push(product);
    return this;
  }

  removeProduct(id: ProductId): ProductListEntity {
    const index = this._products.findIndex((p: ProductEntity) => p.id === id);
    this._products.splice(index, 1);
    return this;
  }

  get totalProductsPrice(): number {
    return this.products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }
}
