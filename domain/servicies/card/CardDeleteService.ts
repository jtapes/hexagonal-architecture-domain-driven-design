import { ProductId } from "../../entities/product/productEntities";
import { CardDeleteUseCase } from "../../ports/in/card/CardDeleteUseCase";
import { CardDeletePort } from "../../ports/out/card/CardDeletePort";

export class CardDeleteService implements CardDeleteUseCase {
  constructor(private readonly cardDeletePort: CardDeletePort) {}
  delete(ids: ProductId[]) {
    return this.cardDeletePort.delete(ids);
  }
}
