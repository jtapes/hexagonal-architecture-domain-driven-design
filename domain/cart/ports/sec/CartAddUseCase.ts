import { ProductId } from "../../../product/ProductEnitity";
import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../ErrorEntities";
import { SuccessEntities } from "../../../SuccessEntities";
export interface CartAddUseCase {
  add(ids: ProductId[]): Either<ErrorEntities, SuccessEntities>;
}
