import { CardLoadPort } from "../../domain/ports/out/card/CardLoadPort";
import { cardMapper } from "../../mappers/CardMapper";

export class CardLoadAdapter implements CardLoadPort {
  load() {
    const responseJson = process.api.cards;
    return cardMapper(responseJson);
  }
}
