import { Either } from "@sweet-monads/either";
import { ErrorEntities } from "../../../ErrorEntities";
import { CartListEnitity } from "../../entities/CartListEnitity";
export interface CartLoadQuery {
  load(): Either<ErrorEntities, CartListEnitity>;
}
