import { ProductListingEntities } from "../product/productListingEntities";
import { ProductEntities, ProductId } from "../product/productEntities";
export class CardListingEntities extends ProductListingEntities {
  addProduct(product: ProductEntities): ProductListingEntities {
    this._products.push(product);
    return this;
  }

  removeProduct(id: ProductId): ProductListingEntities {
    const index = this._products.findIndex((p: ProductEntities) => p.id === id);
    this._products.splice(index, 1);
    return this;
  }

  get totalProductsPrice(): number {
    return this.products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }
}
