import { ProductId } from "../../../entities/product/productEntities";
import type { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../entities/errorEntities";

export interface CardAddPort {
  add(ids: ProductId[]): Either<
    ErrorEntities,
    {
      success: boolean;
    }
  >;
}
