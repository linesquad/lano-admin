import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../services/apiCategories";

const useAddProduct = () => {
  return useMutation({
    mutationFn: postProduct,
    onSuccess: (data) => {
      console.log("Product add succesfully" + data);
    },
    onError: (error) => {
      console.error("Product does not add succesfully " + error);
    },
  });
};

export default useAddProduct;
