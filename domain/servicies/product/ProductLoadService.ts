import { ProductLoadQuery } from "../../ports/in/product/ProductLoadQuery";
import { ProductLoadPort } from "../../ports/out/product/ProductLoadPort";
import { LoadProductCommand } from "../../commands/product/LoadProductCommand";

export class ProductLoadService implements ProductLoadQuery {
  constructor(private readonly productLoadPort: ProductLoadPort) {}
  load(command: LoadProductCommand) {
    return this.productLoadPort.load(command);
  }
}
