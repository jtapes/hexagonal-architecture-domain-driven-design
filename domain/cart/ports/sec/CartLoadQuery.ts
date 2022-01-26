import { Either } from "@sweet-monads/either";
import { ErrorEntity } from "../../../ErrorEntity";
import { CartListEntity } from "../../entities/CartListEntity";
export interface CartLoadQuery {
  load(): Either<ErrorEntity, CartListEntity>;
}
