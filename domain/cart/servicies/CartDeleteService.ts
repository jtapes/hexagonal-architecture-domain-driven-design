import { ProductId } from "../../product/ProductEnitity";
import { CartDeleteUseCase } from "../ports/in/CartDeleteUseCase";
import { CartDeletePort } from "../ports/out/CartDeletePort";

export class CartDeleteService implements CartDeleteUseCase {
  constructor(private readonly cardDeletePort: CartDeletePort) {}
  delete(ids: ProductId[]) {
    return this.cardDeletePort.delete(ids);
  }
}
