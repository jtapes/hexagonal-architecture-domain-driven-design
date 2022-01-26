import { ProductListEnitity } from "../../domain/product/ProductListEnitity";
import { ProductEnitity } from "../../domain/product/ProductEnitity";

export const productListingMock: ProductListEnitity = new ProductListEnitity([
  new ProductEnitity("1", "snikers", 60),
  new ProductEnitity("2", "mars", 80),
  new ProductEnitity("3", "kinder", 120),
]);
