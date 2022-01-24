export type ProductId = string;
export type ProductName = string;
export type ProductPrice = number;

export class ProductEntities {
  constructor(
    private readonly _id: ProductId,
    private readonly _name: ProductName,
    private readonly _price: ProductPrice
  ) {}

  /* istanbul ignore next */
  public get id() {
    return this._id;
  }

  /* istanbul ignore next */
  public get name() {
    return this._name;
  }

  /* istanbul ignore next */
  public get price() {
    return this._price;
  }
}
