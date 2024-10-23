import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { putProduct } from "../services/apiProductById";
import { EditProductInfo } from "../features/PostContext";
import { toast } from "react-toastify";

const useEditProductById = (): UseMutationResult<
  EditProductInfo,
  Error,
  EditProductInfo
> => {
  return useMutation<EditProductInfo, Error, EditProductInfo>({
    mutationFn: (editedProduct: EditProductInfo) => putProduct(editedProduct),
    onSuccess: () => {
      toast.success("თქვენი პროდუქტი წარმატებით განახლდა!");
    },
    onError: () => {
      toast.error("განახლება ვერ მოხერხდა!");
    },
  });
};

export default useEditProductById;
