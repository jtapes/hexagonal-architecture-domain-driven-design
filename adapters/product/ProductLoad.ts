import { ProductLoadPort } from "../../domain/ports/out/product/ProductLoadPort";
import { LoadProductCommand } from "../../domain/commands/product/LoadProductCommand";
import { productsMapper } from "../../mappers/ProductMapper";
import { ProductsResponseSchema } from "../../schema/productsSchema";

export class ProductLoadAdapter implements ProductLoadPort {
  load(command: LoadProductCommand) {
    const responseJson = process.api.products.filter((product) => {
      return command.ids.includes(product.id);
    });
    const valid = ProductsResponseSchema.safeParse(responseJson).success;
    return valid ? productsMapper(responseJson) : null;
  }
}
