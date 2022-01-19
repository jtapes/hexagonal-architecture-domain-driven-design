import { ProductEntities } from "../domain/entities/product/productEntities";
import { ProductListingEntities } from "../domain/entities/product/productListingEntities";
import { ProductsResponseSchemaType } from "../schema/productsSchema";

export function productsMapper(
  response: ProductsResponseSchemaType
): ProductListingEntities {
  return new ProductListingEntities(
    response.map(
      (product) => new ProductEntities(product.id, product.title, product.price)
    )
  );
}
