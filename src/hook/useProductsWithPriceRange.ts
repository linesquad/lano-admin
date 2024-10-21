import { useQuery } from "@tanstack/react-query";
import { fetchProductsWithPriceRange } from "../services/apiPriceRange";

export const useProductsWithPriceRange = (
  minPrice: string,
  maxPrice: string
) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["priceRangeProducts", minPrice, maxPrice],
    queryFn: () => fetchProductsWithPriceRange(minPrice, maxPrice),
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, data };
};
