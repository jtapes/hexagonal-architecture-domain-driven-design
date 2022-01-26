import { ProductId } from "./ProductEntity";

export class ProductLoadCommand {
  constructor(
    private readonly _ids: ProductId[],
    private readonly _lang: string = "ru"
  ) {}

  public get ids(): ProductId[] {
    return this._ids;
  }

  public get lang(): ProductId {
    return this._lang;
  }
}
