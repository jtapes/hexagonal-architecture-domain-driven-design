import { ProductListEntity } from "./ProductListEntity";
import { ProductLoadCommand } from "./ProductLoadCommand";
import { Either } from "@sweet-monads/either";
import { ErrorEntity } from "../ErrorEntity";

export interface ProductLoadQuery {
  load(command: ProductLoadCommand): Either<ErrorEntity, ProductListEntity>;
}
