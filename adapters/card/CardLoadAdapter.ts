import { CardLoadPort } from "../../domain/ports/out/card/CardLoadPort";
import { cardMapper } from "../../mappers/CardMapper";
import { right, left } from "@sweet-monads/either";
import { ProductsResponseSchema } from "../../schema/productsSchema";
import { ErrorEntities } from "../../domain/entities/errorEntities";

export class CardLoadAdapter implements CardLoadPort {
  load() {
    const responseJson = process.api.cards;
    const valid = ProductsResponseSchema.safeParse(responseJson);
    return valid.success
      ? right(cardMapper(valid.data))
      : left(new ErrorEntities("productLoad", valid.error));
  }
}
