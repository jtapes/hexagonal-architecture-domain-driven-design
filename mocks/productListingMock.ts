import { ProductListingEntities } from "../domain/entities/product/productListingEntities";
import { ProductEntities } from "../domain/entities/product/productEntities";

export const productListingMock: ProductListingEntities =
  new ProductListingEntities([
    new ProductEntities("1", "snikers", 60),
    new ProductEntities("2", "mars", 80),
    new ProductEntities("3", "kinder", 120),
  ]);
