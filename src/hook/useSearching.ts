import { useQuery } from "@tanstack/react-query";

import { searchingProduct } from "../services/apiProducts";
import { SearchProduct } from "../types/Product";

export const useSearchProducts = (input: string) => {
  return useQuery<SearchProduct[], Error>({
    queryKey: ["products", input],
    queryFn: () => searchingProduct(input),
    enabled: !!input,
  });
};
