import {
  InvalidateQueryFilters,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { deleteCategory } from "../services/apiCategory";

import { useQueryClient } from "@tanstack/react-query";

export const useDeleteCategory = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,
    mutationKey: ["allCategory"],
    onError: (error) => {
      console.error("Error deleting category", error);
    },
    onSuccess: () => {
      console.log("Category delete success");
      queryClient.invalidateQueries(["allCategory"] as InvalidateQueryFilters);
    },
  });
};
