import { ProductId } from "../../../entities/product/productEntities";

export interface CardDeletePort {
  delete(ids: ProductId[]): {
    success: boolean;
  };
}
