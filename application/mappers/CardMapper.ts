import { CartListEntity } from "../../domain/cart/entities/CartListEntity";
import { CartEntity } from "../../domain/cart/entities/CartEntity";
import { ProductsResponseSchemaType } from "../schema/ProductsSchema";

export function cardMapper(
  response: ProductsResponseSchemaType
): CartListEntity {
  return new CartListEntity(
    response.map(
      (product) => new CartEntity(product.id, product.title, product.price)
    )
  );
}
