import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/apiProductById";
import { ProductById } from "../types/ProductById";

export const useGetProductById = (id: string) => {
  return useQuery<ProductById>({
    queryKey: ["ProductById", id],
    queryFn: () => fetchProductById(id),
  });
};
