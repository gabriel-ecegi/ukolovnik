import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USER_INFO_QUERY_KEY } from "Auth/Api/Queries/useUserInfoQuery";
import { postAuthSignIn } from "Infrastructure/Api/Api";

export function useSignInMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postAuthSignIn,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [USER_INFO_QUERY_KEY] });
    },
  });

  return mutation;
}
