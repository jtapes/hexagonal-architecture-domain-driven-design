import { CartListEnitity } from "../../domain/cart/entities/CartListEnitity";
import { CartEnitity } from "../../domain/cart/entities/CartEnitity";
import { ProductsResponseSchemaType } from "../schema/ProductsSchema";

export function cardMapper(
  response: ProductsResponseSchemaType
): CartListEnitity {
  return new CartListEnitity(
    response.map(
      (product) => new CartEnitity(product.id, product.title, product.price)
    )
  );
}
