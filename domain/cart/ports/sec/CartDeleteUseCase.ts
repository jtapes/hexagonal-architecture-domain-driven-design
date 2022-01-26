import { ProductId } from "../../../product/ProductEnitity";
import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../ErrorEntities";
import { SuccessEntities } from "../../../SuccessEntities";
export interface CartDeleteUseCase {
  delete(ids: ProductId[]): Either<ErrorEntities, SuccessEntities>;
}
