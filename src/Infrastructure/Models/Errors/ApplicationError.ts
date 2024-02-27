/**
 * ApplicationError
 * Use this error to indicate that something went wrong in the application logic.
 * Do not use it for errors caused by code
 *
 */
export class ApplicationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApplicationError";
  }
}
