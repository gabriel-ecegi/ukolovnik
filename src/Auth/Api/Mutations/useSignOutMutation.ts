import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USER_INFO_QUERY_KEY } from "Auth/Api/Queries/useUserInfoQuery";
import { postAuthSignOut } from "Infrastructure/Api/Api";

export function useSignOutMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => postAuthSignOut(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_INFO_QUERY_KEY] });
    },
  });

  return mutation;
}
