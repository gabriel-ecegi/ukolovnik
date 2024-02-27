import { ProblemDetails } from "Infrastructure/Api/Api";

export type ApiProblemDetails = {
  errors: { [key: string | number]: ErrorDetail[] };
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
};

export type ErrorDetail = {
  code: ErrorCode;
  message?: string | null;
};

export enum ErrorCode {
  Unspecified = "Unspecified",
  OutOfRange = "OutOfRange",
  NotFound = "NotFound",
  Invalid = "Invalid",
  Forbidden = "Forbidden",
  TooManyRequests = "TooManyRequests",
  Conflict = "Conflict",
  NullOrEmpty = "NullOrEmpty",
  Unauthorized = "Unauthorized",
  ExternalProviderNotAvailable = "ExternalProviderNotAvailable",
}

type MaybeErrorMaybeProblemDetails = Error | ProblemDetails | ApiProblemDetails;

export type ErrorDetails = { [key: string | number]: ErrorDetail[] };

export class ApiCallError extends Error {
  public status: number;
  public errors?: { [key: string | number]: ErrorDetail[] };
  public title?: string;
  cause: number;

  constructor(
    httpStatus: number,
    title: string,
    errors?: { [key: string | number]: ErrorDetail[] }
  ) {
    super(`API call failed with status ${httpStatus}`);
    this.name = "APICallError";
    this.cause = httpStatus;
    this.status = httpStatus;
    this.errors = errors;
    this.title = title;
  }
}

export const mapAPIErrorResponse = (
  error: MaybeErrorMaybeProblemDetails,
  status?: number
): Error | ApiCallError => {
  if (error instanceof Error) {
    return new ApiCallError(status ?? 0, error.message, {
      error: [{ message: error.message, code: ErrorCode.Unspecified }],
    });
  }

  const hasStatus = "status" in error && !Number.isNaN(Number(error.status));

  if (hasStatus || !!status) {
    const httpStatus = !!status ? status : Number(error.status);
    if ("errors" in error) {
      return new ApiCallError(
        httpStatus,
        error.title ?? "API call failed",
        error.errors
      );
    }

    return new ApiCallError(httpStatus, error.title ?? "API call failed");
  }

  return new ApiCallError(0, "API call failed");
};
