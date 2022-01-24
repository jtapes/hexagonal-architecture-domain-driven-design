import { ProductId } from "../../domain/entities/product/productEntities";
import { CardDeletePort } from "../../domain/ports/out/card/CardDeletePort";
import { right, left } from "@sweet-monads/either";
import { SuccessResponseSchema } from "../../schema/successSchema";
import { ErrorEntities } from "../../domain/entities/errorEntities";
import { SuccessEntities } from "../../domain/entities/SuccessEntities";

export class CardDeleteAdapter implements CardDeletePort {
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
      return right(new SuccessEntities(true));
    } else {
      return left(new ErrorEntities("id valid"));
    }
  }
}
