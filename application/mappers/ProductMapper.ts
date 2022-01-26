import { ProductEntity } from "../../domain/product/ProductEntity";
import { ProductListEntity } from "../../domain/product/ProductListEntity";
import { ProductsResponseSchemaType } from "../schema/ProductsSchema";

export function productsMapper(
  response: ProductsResponseSchemaType
): ProductListEntity {
  return new ProductListEntity(
    response.map(
      (product) => new ProductEntity(product.id, product.title, product.price)
    )
  );
}
