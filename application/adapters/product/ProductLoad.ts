import { ProductLoadPort } from "../../../domain/product/ProductLoadPort";
import { ProductLoadCommand } from "../../../domain/product/ProductLoadCommand";
import { productsMapper } from "../../mappers/ProductMapper";
import { ProductsResponseSchema } from "../../schema/ProductsSchema";
import { right, left } from "@sweet-monads/either";
import { ErrorEntities } from "../../../domain/ErrorEntities";
import { AxiosType } from "../../../types/AxiosType";

export class ProductLoadAdapter implements ProductLoadPort {
  api(command: ProductLoadCommand): AxiosType {
    const responseJson = process.api.products.filter((product) => {
      return command.ids.includes(product.id);
    });
    return {
      data: responseJson,
      code: 200,
    };
  }

  load(command: ProductLoadCommand) {
    const response = this.api(command);
    const valid = ProductsResponseSchema.safeParse(response.data);
    return valid.success
      ? right(productsMapper(valid.data))
      : left(new ErrorEntities("productLoad", valid.error));
  }
}
