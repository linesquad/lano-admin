import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/apiProductById";

export const useGetProductById = (id: string) => {
  return useQuery({
    queryKey: ["ProductById", id],
    queryFn: () => fetchProductById(id),
  });
};
