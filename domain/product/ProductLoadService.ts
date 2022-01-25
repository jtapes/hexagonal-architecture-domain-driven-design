import { ProductLoadQuery } from "./ProductLoadQuery";
import { ProductLoadPort } from "./ProductLoadPort";
import { ProductLoadCommand } from "./ProductLoadCommand";

export class ProductLoadService implements ProductLoadQuery {
  constructor(private readonly productLoadPort: ProductLoadPort) {}
  load(command: ProductLoadCommand) {
    return this.productLoadPort.load(command);
  }
}
