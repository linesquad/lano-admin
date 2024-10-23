import {
  InvalidateQueryFilters,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { postCategory } from "../services/apiCategory";
import { useQueryClient } from "@tanstack/react-query";

export const useAddCategory = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: postCategory,
    mutationKey: ["allCategory"],
    onError: (error) => {
      console.error("Error adding category", error);
    },
    onSuccess: () => {
      console.log("Category added successfully");
      queryClient.invalidateQueries(["allCategory"] as InvalidateQueryFilters);
    },
  });
};
