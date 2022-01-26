import { Either } from "@sweet-monads/either";
import { ErrorEntity } from "../ErrorEntity";
import { ProductListEntity } from "./ProductListEntity";
import { ProductLoadCommand } from "./ProductLoadCommand";
export interface ProductLoadPort {
  load(command: ProductLoadCommand): Either<ErrorEntity, ProductListEntity>;
}
