import { useQuery } from "@tanstack/react-query";

import { ProductResponse } from "../types/Product";
import { fetchAllProducts } from "../services/apiProducts";

export const useGetAllProducts = (page: number) => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["products", page],
    queryFn: () => fetchAllProducts(page),
  });
};
