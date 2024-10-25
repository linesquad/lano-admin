import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../services/apiCategories";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAddProduct = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      toast.success("პროდუქტი წარმატებით დაემატა 🥳");
      navigate("/products");
    },
    onError: () => {
      toast.error("პროდუქტი ვერ დაემატა 😿");
    },
  });
};

export default useAddProduct;
