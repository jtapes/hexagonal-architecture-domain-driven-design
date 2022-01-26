import { ProductListEnitity } from "../../domain/product/ProductListEntity";
import { ProductEntity } from "../../domain/product/ProductEntity";

export const productListingMock: ProductListEnitity = new ProductListEnitity([
  new ProductEntity("1", "snikers", 60),
  new ProductEntity("2", "mars", 80),
  new ProductEntity("3", "kinder", 120),
]);
