import { CardAddUseCase } from "../../domain/ports/in/card/CardAddUseCase";
import { CardAddPort } from "../../domain/ports/out/card/CardAddPort";
import { ProductId } from "../../domain/entities/product/productEntities";

export class CardAddService implements CardAddUseCase {
  constructor(private readonly cardAddPort: CardAddPort) {}
  add(ids: ProductId[]) {
    return this.cardAddPort.add(ids);
  }
}
