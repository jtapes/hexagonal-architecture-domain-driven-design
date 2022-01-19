import { ProductLoadPort } from "../../domain/ports/out/product/ProductLoadPort";
import { LoadProductCommand } from "../../domain/commands/product/LoadProductCommand";
import { productsMapper } from "../../mappers/ProductMapper";

export class ProductLoadAdapter implements ProductLoadPort {
  load(command: LoadProductCommand) {
    const responseJson = process.api.products.filter((product) => {
      return command.ids.includes(product.id);
    });
    // import { ProductsResponseSchemaType } from "../schema/productsSchema";

    return productsMapper(responseJson);
  }
}
