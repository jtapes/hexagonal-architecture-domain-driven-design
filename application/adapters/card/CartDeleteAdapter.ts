import { ProductId } from "../../../domain/product/ProductEntity";
import { CartDeletePort } from "../../../domain/cart/ports/pr/CartDeletePort";
import { right, left } from "@sweet-monads/either";
import { SuccessResponseSchema } from "../../schema/SuccessSchema";
import { ErrorEntity } from "../../../domain/ErrorEntity";
import { SuccessEntity } from "../../../domain/SuccessEntity";

export class CartDeleteAdapter implements CartDeletePort {
  api(ids: ProductId[]) {
    let isDelete = false;
    process.api.cards = process.api.cards.filter((product) => {
      const validId = !ids.includes(product.id);
      if (validId) {
        isDelete = true;
      }
      return validId;
    });
    return {
      data: { success: isDelete },
      code: 200,
    };
  }

  delete(ids: ProductId[]) {
    const response = this.api(ids);
    const valid = SuccessResponseSchema.safeParse(response.data);
    if (valid.success) {
      return right(new SuccessEntity(true));
    } else {
      return left(new ErrorEntity("id valid"));
    }
  }
}
