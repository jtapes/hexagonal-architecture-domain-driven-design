import { ProductLoadQuery } from "../../domain/ports/in/product/ProductLoadQuery";
import { ProductLoadPort } from "../../domain/ports/out/product/ProductLoadPort";
import { LoadProductCommand } from "../../domain/commands/product/LoadProductCommand";

export class ProductLoadService implements ProductLoadQuery {
  constructor(private readonly productLoadPort: ProductLoadPort) {}
  load(command: LoadProductCommand) {
    return this.productLoadPort.load(command);
  }
}
