import { ProductListingEntities } from "../../../entities/product/productListingEntities";
import { LoadProductCommand } from "../../../commands/product/LoadProductCommand";
import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../entities/errorEntities";

export interface ProductLoadQuery {
  load(
    command: LoadProductCommand
  ): Either<ErrorEntities, ProductListingEntities>;
}
