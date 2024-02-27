/* eslint-disable */
// THIS FILE WAS GENERATED
// ALL CHANGES WILL BE OVERWRITTEN

// ARCHITECTURE START
type StandardError = globalThis.Error;
type Error500s = 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
type ErrorStatuses = 0 | Error500s;
export type ErrorResponse = FetchResponse<unknown, ErrorStatuses>;

export type FetchResponseOfError = {
  data: null;
  error: StandardError;
  status: ErrorStatuses;
  args: any;
};

export type FetchResponseOfSuccess<TData, TStatus extends number = 0> = {
  data: TData;
  error: null;
  status: TStatus;
  args: any;
  responseHeaders: Headers;
};

export type FetchResponse<
  TData,
  TStatus extends number = 0
> = TStatus extends ErrorStatuses
  ? FetchResponseOfError
  : FetchResponseOfSuccess<TData, TStatus>;

type Configuration = {
  jwtKey: string | undefined;
  onResponse?: (response: FetchResponse<unknown, any>) => void;
};

let CONFIG: Configuration = {
  jwtKey: undefined,
  onResponse: () => {},
};

export function configureApiCalls(configuration: Configuration) {
  CONFIG = { ...CONFIG, ...configuration };
}

async function fetchJson<T extends FetchResponse<unknown, number>>(
  ...args: any
): Promise<T> {
  const errorResponse = (error: StandardError, status: number, args: any) => {
    const errorResponse = {
      status: status as ErrorStatuses,
      args,
      data: null,
      error,
    } satisfies FetchResponse<T>;
    CONFIG.onResponse && CONFIG.onResponse(errorResponse);
    return errorResponse as unknown as T;
  };

  const errorStatus = (args: any) => {
    const errorResponse = {
      status: 0,
      args,
      data: null,
      error: new Error("Network error"),
    } as FetchResponse<T, Error500s>;
    CONFIG.onResponse && CONFIG.onResponse(errorResponse);
    return errorResponse as unknown as T;
  };

  try {
    const res: Response = await (fetch as any)(...args);
    const status = res.status;
    try {
      const json = await res.json();
      const response = {
        data: json,
        status: res.status,
        args,
        error: null,
        responseHeaders: res.headers,
      };
      CONFIG.onResponse && CONFIG.onResponse(response);
      return response as unknown as T;
    } catch (error) {
      return errorResponse(error as StandardError, status, args);
    }
  } catch {
    return errorStatus(args);
  }
}

const updateHeaders = (headers: Headers) => {
  if (!headers.has("Content-Type")) {
    headers.append("Content-Type", "application/json");
  }
  const token = CONFIG.jwtKey
    ? localStorage.getItem(CONFIG.jwtKey as any)
    : undefined;
  if (!headers.has("Authorization") && token) {
    headers.append("Authorization", token);
  }
};

function apiPost<TResponse extends FetchResponse<unknown, number>, TRequest>(
  url: string,
  request: TRequest,
  headers: Headers
) {
  var raw = JSON.stringify(request);
  updateHeaders(headers);
  var requestOptions = {
    method: "POST",
    headers,
    body: raw,
    redirect: "follow",
    credentials: "include",
  };

  return fetchJson<TResponse>(url, requestOptions as any);
}

type ParamsObject = {
  [key: string]: any;
};

export function apiGet<TResponse extends FetchResponse<unknown, number>>(
  url: string,
  headers: Headers,
  paramsObject: ParamsObject = {}
) {
  updateHeaders(headers);
  const queryString = Object.entries(paramsObject)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map((val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
          .join("&");
      }
      // Handling non-array parameters
      return value !== undefined && value !== null
        ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        : "";
    })
    .filter((part) => part !== "")
    .join("&");
  const maybeQueryString = queryString.length > 0 ? `?${queryString}` : "";
  const requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
    credentials: "include",
  };
  return fetchJson<TResponse>(`${url}${maybeQueryString}`, requestOptions);
}

function apiPut<TResponse extends FetchResponse<unknown, number>, TRequest>(
  url: string,
  request: TRequest,
  headers: Headers
) {
  updateHeaders(headers);

  var raw = JSON.stringify(request);

  var requestOptions = {
    method: "PUT",
    headers,
    body: raw,
    redirect: "follow",
    credentials: "include",
  };

  return fetchJson<TResponse>(url, requestOptions as any);
}

function apiDelete<TResponse extends FetchResponse<unknown, number>>(
  url: string,
  headers: Headers,
  paramsObject: ParamsObject = {}
) {
  updateHeaders(headers);
  const queryString = Object.entries(paramsObject)
    .filter(([_, val]) => val !== undefined && val !== null)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
  const maybeQueryString = queryString.length > 0 ? `?${queryString}` : "";

  var requestOptions = {
    method: "DELETE",
    headers,
    redirect: "follow",
    credentials: "include",
  };
  return fetchJson<TResponse>(`${url}${maybeQueryString}`, requestOptions);
}

function apiPatch<TResponse extends FetchResponse<unknown, number>, TRequest>(
  url: string,
  request: TRequest,
  headers: Headers
) {
  updateHeaders(headers);

  var raw = JSON.stringify(request);

  var requestOptions = {
    method: "PATCH",
    headers,
    body: raw,
    redirect: "follow",
    credentials: "include",
  };

  return fetchJson<TResponse>(url, requestOptions as any);
}
// ARCHITECTURE END

export const API_ROUTES = {
  postAuthSignIn: "/api/auth/sign-in",
  getAuthUserInfo: "/api/auth/user-info",
  postAuthSignOut: "/api/auth/sign-out",
  getClients: "/api/clients",
  getClientsId: "/api/clients",
};

export type ClientDto = {
  id: number;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
};

export type ProblemDetails = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
};

export type SignInRequest = {
  login?: string | null;
  password?: string | null;
};

export type UserInfo = {
  login?: string | null;
};

const API_URL = import.meta.env.VITE_API_URL;

export type PostAuthSignInFetchResponse =
  | FetchResponse<void, 200>
  | FetchResponse<ProblemDetails, 400>
  | ErrorResponse;

export const postAuthSignIn = (
  requestContract: SignInRequest,
  headers = new Headers()
): Promise<PostAuthSignInFetchResponse> =>
  apiPost(
    `${API_URL}/api/auth/sign-in`,
    requestContract,
    headers
  ) as Promise<PostAuthSignInFetchResponse>;

export type GetAuthUserInfoFetchResponse =
  | FetchResponse<UserInfo, 200>
  | FetchResponse<UserInfo, 401>
  | ErrorResponse;

export const getAuthUserInfo = (
  headers = new Headers()
): Promise<GetAuthUserInfoFetchResponse> => {
  return apiGet(
    `${API_URL}/api/auth/user-info`,
    headers,
    {}
  ) as Promise<GetAuthUserInfoFetchResponse>;
};

export type PostAuthSignOutFetchResponse =
  | FetchResponse<void, 200>
  | ErrorResponse;

export const postAuthSignOut = (
  headers = new Headers()
): Promise<PostAuthSignOutFetchResponse> =>
  apiPost(
    `${API_URL}/api/auth/sign-out`,
    {},
    headers
  ) as Promise<PostAuthSignOutFetchResponse>;

export type GetClientsFetchResponse =
  | FetchResponse<ClientDto[], 200>
  | ErrorResponse;

export const getClients = (
  headers = new Headers()
): Promise<GetClientsFetchResponse> => {
  return apiGet(
    `${API_URL}/api/clients`,
    headers,
    {}
  ) as Promise<GetClientsFetchResponse>;
};

export type GetClientsIdFetchResponse =
  | FetchResponse<ClientDto, 200>
  | ErrorResponse;

export const getClientsId = (
  id: number,
  headers = new Headers()
): Promise<GetClientsIdFetchResponse> => {
  return apiGet(
    `${API_URL}/api/clients/${id}`,
    headers,
    {}
  ) as Promise<GetClientsIdFetchResponse>;
};

export const API = {
  postAuthSignIn,
  getAuthUserInfo,
  postAuthSignOut,
  getClients,
  getClientsId,
};
