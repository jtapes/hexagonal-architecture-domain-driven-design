import { ProductId } from "../../../domain/product/ProductEntity";
import { CartDeleteUseCase } from "../../../domain/cart/ports/sec/CartDeleteUseCase";
import { CartDeleteAdapter } from "../../adapters/card/CartDeleteAdapter";

export class CartDeleteService implements CartDeleteUseCase {
  cardDeletePort = new CartDeleteAdapter();

  delete(ids: ProductId[]) {
    return this.cardDeletePort.delete(ids);
  }
}
