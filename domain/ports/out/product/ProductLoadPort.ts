import { ProductListingEntities } from "../../../entities/product/productListingEntities";
import { LoadProductCommand } from "../../../commands/product/LoadProductCommand";
import type { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../entities/errorEntities";

export interface ProductLoadPort {
  load(
    command: LoadProductCommand
  ): Either<ErrorEntities, ProductListingEntities>;
}
