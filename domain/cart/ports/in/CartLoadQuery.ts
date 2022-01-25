import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../ErrorEntities";
import { CartListingEnitity } from "../../entities/CartListingEnitity";
export interface CartLoadQuery {
  load(): Either<ErrorEntities, CartListingEnitity>;
}
