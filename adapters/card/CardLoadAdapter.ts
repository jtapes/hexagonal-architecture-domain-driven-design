import { CardLoadPort } from "../../domain/ports/out/card/CardLoadPort";
import { cardMapper } from "../../mappers/CardMapper";
import { right, left } from "@sweet-monads/either";

export class CardLoadAdapter implements CardLoadPort {
  load() {
    const responseJson = process.api.cards;
    return right(cardMapper(responseJson));
  }
}
