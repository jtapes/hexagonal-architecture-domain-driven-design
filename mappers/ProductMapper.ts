import { ProductEntities } from "../domain/entities/product/productEntities";
import { ProductListingEntities } from "../domain/entities/product/productListingEntities";

export function productsMapper(response: any): ProductListingEntities {
  // TODO valid schema

  return new ProductListingEntities(
    response.map(
      (product) => new ProductEntities(product.id, product.title, product.price)
    )
  );
}
