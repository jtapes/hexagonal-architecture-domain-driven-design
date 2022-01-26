import { ProductListEnitity } from "../../product/ProductListEnitity";
import { ProductEnitity, ProductId } from "../../product/ProductEnitity";
export class CartListEnitity extends ProductListEnitity {
  addProduct(product: ProductEnitity): ProductListEnitity {
    this._products.push(product);
    return this;
  }

  removeProduct(id: ProductId): ProductListEnitity {
    const index = this._products.findIndex((p: ProductEnitity) => p.id === id);
    this._products.splice(index, 1);
    return this;
  }

  get totalProductsPrice(): number {
    return this.products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }
}
