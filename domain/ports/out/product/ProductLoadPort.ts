import { ProductListingEntities } from "../../../entities/product/productListingEntities";
import { LoadProductCommand } from "../../../commands/product/LoadProductCommand";

export interface ProductLoadPort {
  load(command: LoadProductCommand): ProductListingEntities;
}
