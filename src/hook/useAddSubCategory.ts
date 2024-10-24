import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { postSubCategory } from "../services/apiCategories";

const useAddSubCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postSubCategory,
    onSuccess: () => {
      console.log("Sub Category add succesfully");
      queryClient.invalidateQueries(["allCategory"] as InvalidateQueryFilters);
    },
    onError: (error) => {
      console.log(`Sub category does not add succes Error: ${error.message}`);
    },
  });
};

export default useAddSubCategory;
