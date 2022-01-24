import { ProductId } from "../../../entities/product/productEntities";
import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../entities/errorEntities";
import { SuccessEntities } from "../../../entities/SuccessEntities";
export interface CardAddUseCase {
  add(ids: ProductId[]): Either<ErrorEntities, SuccessEntities>;
}
