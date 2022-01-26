import { ProductId } from "../../../product/ProductEntity";
import { Either } from "@sweet-monads/either";
import { ErrorEntity } from "../../../ErrorEntity";
import { SuccessEntity } from "../../../SuccessEntity";
export interface CartAddUseCase {
  add(ids: ProductId[]): Either<ErrorEntity, SuccessEntity>;
}
