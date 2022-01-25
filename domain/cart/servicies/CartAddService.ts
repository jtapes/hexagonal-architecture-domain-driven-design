import { CartAddUseCase } from "../ports/in/CartAddUseCase";
import { CartAddPort } from "../ports/out/CartAddPort";
import { ProductId } from "../../product/ProductEnitity";

export class CartAddService implements CartAddUseCase {
  constructor(private readonly cardAddPort: CartAddPort) {}
  add(ids: ProductId[]) {
    return this.cardAddPort.add(ids);
  }
}
