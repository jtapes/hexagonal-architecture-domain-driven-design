import { ProductListEntity } from "./ProductListEntity";
import { Either } from "@sweet-monads/either";
import { ErrorEntity } from "../ErrorEntity";
import { ProductId } from "./ProductEntity";

export interface ProductLoadQuery {
  load(ids: ProductId[]): Either<ErrorEntity, ProductListEntity>;
}
