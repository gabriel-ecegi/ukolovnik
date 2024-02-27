import { useQuery } from "@tanstack/react-query";
import { GetClientsIdFetchResponse } from "Infrastructure/Api/Api";
import { mockClients } from "./useClientsQuery";

export const CLIENT_DETAIL_QUERY_KEY = "CLIENT_DETAIL_QUERY";

export function useClientDetailQuery(id: number) {
  const query = useQuery({
    queryKey: [CLIENT_DETAIL_QUERY_KEY, id],
    queryFn: () => getClientsId(id),
  });

  return query;
}

export const getClientsId = (
  id: number
): Promise<GetClientsIdFetchResponse> => {
  return Promise.resolve({
    status: 200,
    data: mockClients.find((x) => x.id === id)!,
    args: {},
    error: null,
    responseHeaders: {} as Headers,
  });
};
