import { ProductId } from "../../domain/entities/product/productEntities";
import { CardDeletePort } from "../../domain/ports/out/card/CardDeletePort";

export class CardDeleteAdapter implements CardDeletePort {
  delete(ids: ProductId[]) {
    global.api.cards = global.api.cards.filter((product) => {
      return !ids.includes(product.id);
    });
    return { success: true };
  }
}
