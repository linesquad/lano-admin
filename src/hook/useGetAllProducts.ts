import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchAllProducts } from "../services/apiProducts";
import { ProductResponse } from "../types/Product";

export const useGetAllProducts = (): UseQueryResult<ProductResponse, Error> => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
    refetchOnWindowFocus: false,
  });
};
