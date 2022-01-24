import { ProductId } from "../../domain/entities/product/productEntities";
import { CardAddPort } from "../../domain/ports/out/card/CardAddPort";
import { right, left } from "@sweet-monads/either";
import { ErrorEntities } from "../../domain/entities/errorEntities";
import { AxiosType } from "../../types/AxiosType";
import { SuccessEntities } from "../../domain/entities/SuccessEntities";
import { SuccessResponseSchema } from "../../schema/successSchema";

export class CardAddAdapter implements CardAddPort {
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
      return right(new SuccessEntities(true));
    } else {
      return left(new ErrorEntities("id valid"));
    }
  }
}
