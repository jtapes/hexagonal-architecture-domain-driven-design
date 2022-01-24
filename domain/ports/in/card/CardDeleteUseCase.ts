import { ProductId } from "../../../entities/product/productEntities";
import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../entities/errorEntities";
import { SuccessEntities } from "../../../entities/SuccessEntities";
export interface CardDeleteUseCase {
  delete(ids: ProductId[]): Either<ErrorEntities, SuccessEntities>;
}
