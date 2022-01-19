import { ProductId } from "../../domain/entities/product/productEntities";
import { CardAddPort } from "../../domain/ports/out/card/CardAddPort";

export class CardAddAdapter implements CardAddPort {
  add(ids: ProductId[]) {
    const products = process.api.products.filter((product) => {
      return ids.includes(product.id);
    });
    if (products.length > 0) {
      products.filter((product) => {
        return process.api.cards
          .map((product) => product.id)
          .includes(product.id);
      });

      products.map((product) => {
        process.api.cards.push(product);
      });
    }
    return { success: !!products.length };
  }
}