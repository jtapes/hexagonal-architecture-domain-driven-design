import { CartLoadQuery } from "../ports/in/CartLoadQuery";
import { CartLoadPort } from "../ports/out/CartLoadPort";

export class CartLoadService implements CartLoadQuery {
  constructor(private readonly cardLoadPort: CartLoadPort) {}
  load() {
    return this.cardLoadPort.load();
  }
}
