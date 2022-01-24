import { ProductLoadPort } from "../../domain/ports/out/product/ProductLoadPort";
import { LoadProductCommand } from "../../domain/commands/product/LoadProductCommand";
import { productsMapper } from "../../mappers/ProductMapper";
import { ProductsResponseSchema } from "../../schema/productsSchema";
import { right, left } from "@sweet-monads/either";
import { ErrorEntities } from "../../domain/entities/errorEntities";
import { AxiosType } from "../../types/AxiosType";

export class ProductLoadAdapter implements ProductLoadPort {
  api(command: LoadProductCommand): AxiosType {
    const responseJson = process.api.products.filter((product) => {
      return command.ids.includes(product.id);
    });
    return {
      data: responseJson,
      code: 200,
    };
  }

  load(command: LoadProductCommand) {
    const response = this.api(command);
    const valid = ProductsResponseSchema.safeParse(response.data);
    return valid.success
      ? right(productsMapper(valid.data))
      : left(new ErrorEntities("productLoad", valid.error));
  }
}
