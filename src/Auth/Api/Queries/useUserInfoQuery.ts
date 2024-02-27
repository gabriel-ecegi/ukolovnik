import { useQuery } from "@tanstack/react-query";
import { GetAuthUserInfoFetchResponse, apiGet } from "Infrastructure/Api/Api";
// import { getAuthUserInfo } from "Infrastructure/Api/Api";

export const USER_INFO_QUERY_KEY = "USER_INFO";

export function useUserInfoQuery() {
  const query = useQuery({
    queryKey: [USER_INFO_QUERY_KEY],
    queryFn: () => getAuthUserInfo(),
  });

  return query;
}

export const getAuthUserInfo = (
  headers = new Headers()
): Promise<GetAuthUserInfoFetchResponse> => {
  return apiGet(
    "https://vyvoj.mydock.sab-apps.blogic.cz/test-remote-app/login",
    headers,
    {}
  ) as Promise<GetAuthUserInfoFetchResponse>;
};
