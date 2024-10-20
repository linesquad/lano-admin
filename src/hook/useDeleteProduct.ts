import {
  InvalidateQueryFilters,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteProductById } from "../services/apiProducts";

export const useDeleteProducts = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: deleteProductById,
    onError: (error) => {
      console.error("Error deleting product", error);
    },
    onSuccess: () => {
      console.log("Product delete success");
      queryClient.invalidateQueries(["allProducts"] as InvalidateQueryFilters);
    },
  });
};
