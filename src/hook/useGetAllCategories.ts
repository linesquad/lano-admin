import { useQuery } from "@tanstack/react-query";

import { fetchCategories } from "../services/apiCategories";
import { ICategory } from "../types/categories";

export const useGetAllCategories = () => {
  const { isLoading, isError, error, data } = useQuery<ICategory[]>({
    queryKey: ["allCategories"],
    queryFn: fetchCategories,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, data };
};
