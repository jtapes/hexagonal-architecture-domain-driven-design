import { ProductEntities } from "../domain/entities/product/productEntities";
import { CardListingEntities } from "../domain/entities/card/CardListingEntities";

export const cartListingMock: CardListingEntities = new CardListingEntities([
  new ProductEntities("4", "kinder test", 120),
]);
