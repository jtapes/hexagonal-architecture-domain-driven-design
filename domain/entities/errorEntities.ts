export class ErrorEntities {
  constructor(
    private readonly _message: string,
    private readonly _stack?: any
  ) {}

  get message() {
    return this._message;
  }

  get stack() {
    return this._stack;
  }
}
