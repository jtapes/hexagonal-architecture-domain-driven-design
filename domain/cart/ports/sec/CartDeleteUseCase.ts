import { ProductId } from "../../../product/ProductEntity";
import { Either } from "@sweet-monads/either";
import { ErrorEntity } from "../../../ErrorEntity";
import { SuccessEntity } from "../../../SuccessEntity";
export interface CartDeleteUseCase {
  delete(ids: ProductId[]): Either<ErrorEntity, SuccessEntity>;
}
