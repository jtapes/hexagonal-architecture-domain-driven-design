import { CardListingEntities } from "../domain/entities/card/CardListingEntities";
import { CardEntities } from "../domain/entities/card/CardEntities";

export function cardMapper(response: any): CardListingEntities {
  return new CardListingEntities(
    response.map(
      (product) => new CardEntities(product.id, product.name, product.price)
    )
  );
}
