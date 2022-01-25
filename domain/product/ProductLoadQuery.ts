import { ProductListingEnitity } from "./ProductListingEnitity";
import { ProductLoadCommand } from "./ProductLoadCommand";
import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../ErrorEntities";

export interface ProductLoadQuery {
  load(
    command: ProductLoadCommand
  ): Either<ErrorEntities, ProductListingEnitity>;
}
