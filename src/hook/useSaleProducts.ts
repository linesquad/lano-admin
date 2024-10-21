import { useQuery } from "@tanstack/react-query";
import { fetchSaleProducts } from "../services/apiSaleProducts";

export const useSaleProducts = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["saleProducts"],
    queryFn: fetchSaleProducts,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, data };
};
