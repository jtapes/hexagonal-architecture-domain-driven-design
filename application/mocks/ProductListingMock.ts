import { ProductListEntity } from "../../domain/product/ProductListEntity";
import { ProductEntity } from "../../domain/product/ProductEntity";

export const ProductListingMock = new ProductListEntity([
  new ProductEntity("1", "snickers", 60),
  new ProductEntity("2", "mars", 80),
  new ProductEntity("3", "kinder", 120),
]);
