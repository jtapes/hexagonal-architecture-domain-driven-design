import { ProductListingEntities } from "../../../entities/product/productListingEntities";
import { LoadProductCommand } from "../../../commands/product/LoadProductCommand";
import { ProductLoadPort } from "../../out/product/ProductLoadPort";

// export interface ProductLoadQuery {
//   load(command: LoadProductCommand): ProductListingEntities;
// }

// if the request matches the port
export interface ProductLoadQuery extends ProductLoadPort {}
