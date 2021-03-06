import { ProductId } from "../../../domain/product/ProductEntity";
import { CartAddPort } from "../../../domain/cart/ports/pr/CartAddPort";
import { right, left } from "@sweet-monads/either";
import { ErrorEntity } from "../../../domain/ErrorEntity";
import { AxiosType } from "../../../types/AxiosType";
import { SuccessEntity } from "../../../domain/SuccessEntity";
import { SuccessResponseSchema } from "../../schema/SuccessSchema";

export class CartAddAdapter implements CartAddPort {
  api(ids: ProductId[]): AxiosType {
    const products = process.api.products.filter((product) => {
      return ids.includes(product.id);
    });
    if (products.length > 0) {
      products.filter((product) => {
        return process.api.cards
          .map((product) => product.id)
          .includes(product.id);
      });

      products.map((product) => {
        process.api.cards.push(product);
      });
      return {
        data: { success: true },
        code: 200,
      };
    }
    return {
      data: { success: false },
      code: 400,
    };
  }

  add(ids: ProductId[]) {
    const response = this.api(ids);
    const valid = SuccessResponseSchema.safeParse(response.data);

    if (valid.success) {
      return right(new SuccessEntity(true));
    } else {
      return left(new ErrorEntity("id valid"));
    }
  }
}
