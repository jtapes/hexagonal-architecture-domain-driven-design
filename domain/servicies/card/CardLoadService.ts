import { CardLoadQuery } from "../../ports/in/card/CardLoadQuery";
import { CardLoadPort } from "../../ports/out/card/CardLoadPort";

export class CardLoadService implements CardLoadQuery {
  constructor(private readonly cardLoadPort: CardLoadPort) {}
  load() {
    return this.cardLoadPort.load();
  }
}
