import { CardAddUseCase } from "../../ports/in/card/CardAddUseCase";
import { CardAddPort } from "../../ports/out/card/CardAddPort";
import { ProductId } from "../../entities/product/productEntities";

export class CardAddService implements CardAddUseCase {
  constructor(private readonly cardAddPort: CardAddPort) {}
  add(ids: ProductId[]) {
    return this.cardAddPort.add(ids);
  }
}
