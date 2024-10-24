import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { editCategory } from "../services/apiCategory";

const useEditCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ catId, title }: { catId: string | null; title: string }) =>
      editCategory(catId, title),
    onSuccess: () => {
      console.log("Category edit succ");
      queryClient.invalidateQueries(["allCategory"] as InvalidateQueryFilters);
    },
    onError: (error) => {
      console.log("category does not edit succ" + error.message);
    },
  });
};

export default useEditCategory;
