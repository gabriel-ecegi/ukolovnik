import { useQuery } from "@tanstack/react-query";
import { GetClientsFetchResponse } from "Infrastructure/Api/Api";

export const CLIENTS_QUERY_KEY = "CLIENTS_QUERY";

export function useClientsQuery() {
  const query = useQuery({
    queryKey: [CLIENTS_QUERY_KEY],
    queryFn: () => getMockClients(),
  });

  return query;
}

export const mockClients = [
  {
    id: 1,
    name: "Franta Vomáčka",
    email: "franta.vomacka@sab.cz",
    address: "Praha 1, 110 00",
    phone: "+420 123 456 789",
  },
  {
    id: 2,
    name: "Karel Novák",
    email: "karel.novak@sab.cz",
    address: "Praha 2, 120 00",
    phone: "+420 123 456 789",
  },
];

const getMockClients = (): Promise<GetClientsFetchResponse> => {
  return Promise.resolve({
    status: 200,
    data: mockClients,
    args: {},
    error: null,
    responseHeaders: {} as Headers,
  });
};
