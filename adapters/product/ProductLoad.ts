import { ProductLoadPort } from "../../domain/ports/out/product/ProductLoadPort";
import { LoadProductCommand } from "../../domain/commands/product/LoadProductCommand";
import { productsMapper } from "../../mappers/ProductMapper";

export class ProductLoadAdapter implements ProductLoadPort {
  load(command: LoadProductCommand) {
    const responseJson = global.api.products.filter((product) => {
      return command.ids.includes(product.id);
    });

    return productsMapper(responseJson);
  }
}
