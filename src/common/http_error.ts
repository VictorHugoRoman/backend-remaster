export class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number, stack = "") {
    super(message);
    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
      return;
    }
    Error.captureStackTrace(this, this.constructor);
  }
}
