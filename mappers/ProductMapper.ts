import { ProductEnitity } from "../domain/product/ProductEnitity";
import { ProductListingEnitity } from "../domain/product/ProductListingEnitity";
import { ProductsResponseSchemaType } from "../schema/ProductsSchema";

export function productsMapper(
  response: ProductsResponseSchemaType
): ProductListingEnitity {
  return new ProductListingEnitity(
    response.map(
      (product) => new ProductEnitity(product.id, product.title, product.price)
    )
  );
}
