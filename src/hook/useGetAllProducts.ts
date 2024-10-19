import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../services/apiProducts";

export const useGetAllProducts = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryFn: fetchAllProducts,
    queryKey: ["allProducts"],
  });

  return { data, isError, isLoading, error };
};
