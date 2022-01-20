import { CardListingEntities } from "../../../entities/card/CardListingEntities";
import type { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../entities/errorEntities";

export interface CardLoadPort {
  load(): Either<ErrorEntities, CardListingEntities>;
}
