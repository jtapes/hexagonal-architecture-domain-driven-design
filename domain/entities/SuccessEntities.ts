export class SuccessEntities {
  constructor(
    private readonly _success: boolean,
    private readonly _message?: string
  ) {}

  get message() {
    return this._message;
  }

  get success() {
    return this._success;
  }
}
