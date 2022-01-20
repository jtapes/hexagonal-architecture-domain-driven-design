import { ProductId } from "../../domain/entities/product/productEntities";
import { CardDeleteUseCase } from "../../domain/ports/in/card/CardDeleteUseCase";
import { CardDeletePort } from "../../domain/ports/out/card/CardDeletePort";

export class CardDeleteService implements CardDeleteUseCase {
  constructor(private readonly cardDeletePort: CardDeletePort) {}
  delete(ids: ProductId[]) {
    return this.cardDeletePort.delete(ids);
  }
}
