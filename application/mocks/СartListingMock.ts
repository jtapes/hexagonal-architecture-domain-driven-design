import { ProductEntity } from "../../domain/product/ProductEntity";
import { CardListingEntities } from "../../domain/cart/entities/CartListEntity";

export const artListingMock: CardListingEntities = new CardListingEntities([
  new ProductEntity("4", "kinder test", 120),
]);
