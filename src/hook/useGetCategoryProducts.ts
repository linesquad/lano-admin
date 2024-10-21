import { useQuery } from "@tanstack/react-query";
import { fetchByCatId } from "../services/apiCategories";

export const useGetCategoryProducts = (id: string) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["categoryProducts", id],
    queryFn: () => fetchByCatId(id),
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, data };
};
