import { CartListingEnitity } from "../domain/cart/entities/CartListingEnitity";
import { CartEnitity } from "../domain/cart/entities/CartEnitity";
import { ProductsResponseSchemaType } from "../schema/ProductsSchema";

export function cardMapper(
  response: ProductsResponseSchemaType
): CartListingEnitity {
  return new CartListingEnitity(
    response.map(
      (product) => new CartEnitity(product.id, product.title, product.price)
    )
  );
}
