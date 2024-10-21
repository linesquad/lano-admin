import { useQuery } from "@tanstack/react-query";

import { searchingProduct } from "../services/apiProducts";
import { SearchResponse } from "../types/Product";

export const useSearchProducts = (input: string) => {
  return useQuery<SearchResponse, Error>({
    queryKey: ["products", input],
    queryFn: () => searchingProduct(input),
    enabled: !!input,
  });
};
