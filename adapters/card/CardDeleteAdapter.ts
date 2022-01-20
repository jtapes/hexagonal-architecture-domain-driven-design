import { ProductId } from "../../domain/entities/product/productEntities";
import { CardDeletePort } from "../../domain/ports/out/card/CardDeletePort";
import { right, left } from "@sweet-monads/either";

export class CardDeleteAdapter implements CardDeletePort {
  delete(ids: ProductId[]) {
    process.api.cards = process.api.cards.filter((product) => {
      return !ids.includes(product.id);
    });
    return right({ success: true });
  }
}
