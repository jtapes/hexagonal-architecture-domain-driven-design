import { ProductListingEnitity } from "../../product/ProductListingEnitity";
import { ProductEnitity, ProductId } from "../../product/ProductEnitity";
export class CartListingEnitity extends ProductListingEnitity {
  addProduct(product: ProductEnitity): ProductListingEnitity {
    this._products.push(product);
    return this;
  }

  removeProduct(id: ProductId): ProductListingEnitity {
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
