export class HttpError extends Error {
  statusCode: number;
  message: string;
  constructor(message: string, statusCode: number, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    if (stack) {
      this.stack = stack;
      return;
    }
    //Error.prepareStackTrace!(this, []);
  }
}
