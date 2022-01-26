import { CartAddUseCase } from "../../../domain/cart/ports/sec/CartAddUseCase";
import { ProductId } from "../../../domain/product/ProductEntity";
import { CartAddAdapter } from "../../adapters/card/CartAddAdapter";

export class CartAddService implements CartAddUseCase {
  cartAddPort = new CartAddAdapter();

  add(ids: ProductId[]) {
    return this.cartAddPort.add(ids);
  }
}
