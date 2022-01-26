import { ProductEnitity } from "../domain/product/ProductEnitity";
import { ProductListEnitity } from "../domain/product/ProductListEnitity";
import { ProductsResponseSchemaType } from "../schema/ProductsSchema";

export function productsMapper(
  response: ProductsResponseSchemaType
): ProductListEnitity {
  return new ProductListEnitity(
    response.map(
      (product) => new ProductEnitity(product.id, product.title, product.price)
    )
  );
}
