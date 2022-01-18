import { CardListingEntities } from "../../../entities/card/CardListingEntities";

export interface CardLoadPort {
  load(): CardListingEntities;
}
