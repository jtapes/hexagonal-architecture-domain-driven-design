import { ProductLoadPort } from "../../domain/ports/out/product/ProductLoadPort";
import { LoadProductCommand } from "../../domain/commands/product/LoadProductCommand";
import { productsMapper } from "../../mappers/ProductMapper";
import { ProductsResponseSchema } from "../../schema/productsSchema";
import { right, left } from "@sweet-monads/either";
import { ErrorEntities } from "../../domain/entities/errorEntities";

export class ProductLoadAdapter implements ProductLoadPort {
  load(command: LoadProductCommand) {
    const responseJson = process.api.products.filter((product) => {
      return command.ids.includes(product.id);
    });
    const valid = ProductsResponseSchema.safeParse(responseJson);
    console.log(11, valid.success);
    return valid.success
      ? right(productsMapper(responseJson))
      : left(new ErrorEntities("productLoad", valid.error));
  }
}
