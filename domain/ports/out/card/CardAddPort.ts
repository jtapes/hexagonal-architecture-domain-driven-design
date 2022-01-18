import { ProductId } from "../../../entities/product/productEntities";

export interface CardAddPort {
  add(ids: ProductId[]): {
    success: boolean;
  };
}
