import { CartLoadPort } from "../../../domain/cart/ports/pr/CartLoadPort";
import { cardMapper } from "../../mappers/CardMapper";
import { right, left } from "@sweet-monads/either";
import { ProductsResponseSchema } from "../../schema/ProductsSchema";
import { ErrorEntity } from "../../../domain/ErrorEntity";

export class CartLoadAdapter implements CartLoadPort {
  load() {
    const responseJson = process.api.cards;
    const valid = ProductsResponseSchema.safeParse(responseJson);
    return valid.success
      ? right(cardMapper(valid.data))
      : left(new ErrorEntity("productLoad", valid.error));
  }
}
