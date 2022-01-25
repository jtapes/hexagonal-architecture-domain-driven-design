import { CartAddUseCase } from "../../domain/cart/ports/in/CartAddUseCase";
import { ProductId } from "../../domain/product/ProductEnitity";
import { CartAddAdapter } from "../../adapters/card/CartAddAdapter";

export class CartAddService implements CartAddUseCase {
  cartAddPort = new CartAddAdapter();

  add(ids: ProductId[]) {
    return this.cartAddPort.add(ids);
  }
}
