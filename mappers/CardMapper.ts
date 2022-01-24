import { CardListingEntities } from "../domain/entities/card/CardListingEntities";
import { CardEntities } from "../domain/entities/card/CardEntities";
import { ProductsResponseSchemaType } from "../schema/productsSchema";

export function cardMapper(
  response: ProductsResponseSchemaType
): CardListingEntities {
  return new CardListingEntities(
    response.map(
      (product) => new CardEntities(product.id, product.title, product.price)
    )
  );
}
