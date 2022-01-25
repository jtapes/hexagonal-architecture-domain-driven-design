import { ProductEnitity } from "../domain/product/ProductEnitity";
import { CardListingEntities } from "../domain/cart/entities/CartListingEnitity";

export const artListingMock: CardListingEntities = new CardListingEntities([
  new ProductEnitity("4", "kinder test", 120),
]);
