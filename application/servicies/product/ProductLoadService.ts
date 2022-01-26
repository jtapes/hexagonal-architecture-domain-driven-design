import { ProductLoadQuery } from "../../../domain/product/ProductLoadQuery";
import { ProductLoadCommand } from "../../../domain/product/ProductLoadCommand";
import { ProductLoadAdapter } from "../../adapters/product/ProductLoad";

export class ProductLoadService implements ProductLoadQuery {
  productLoadPort = new ProductLoadAdapter();

  load(command: ProductLoadCommand) {
    return this.productLoadPort.load(command);
  }
}
