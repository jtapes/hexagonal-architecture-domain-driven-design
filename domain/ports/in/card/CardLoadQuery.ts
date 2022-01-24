import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../entities/errorEntities";
import { CardListingEntities } from "../../../entities/card/CardListingEntities";
export interface CardLoadQuery {
  load(): Either<ErrorEntities, CardListingEntities>;
}
