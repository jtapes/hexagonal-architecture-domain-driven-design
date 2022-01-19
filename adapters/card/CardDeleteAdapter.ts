import { ProductId } from "../../domain/entities/product/productEntities";
import { CardDeletePort } from "../../domain/ports/out/card/CardDeletePort";

export class CardDeleteAdapter implements CardDeletePort {
  delete(ids: ProductId[]) {
    process.api.cards = process.api.cards.filter((product) => {
      return !ids.includes(product.id);
    });
    return { success: true };
  }
}
