import { ProductEntity } from "../../domain/product/ProductEntity";
import { CartListEntity } from "../../domain/cart/entities/CartListEntity";

export const artListingMock: CartListEntity = new CartListEntity([
  new ProductEntity("4", "kinder test", 120),
]);
