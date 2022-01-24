import { ProductId } from "../../../entities/product/productEntities";
import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../entities/errorEntities";
export interface CardDeleteUseCase {
  delete(ids: ProductId[]): Either<
    ErrorEntities,
    {
      success: boolean;
    }
  >;
}
