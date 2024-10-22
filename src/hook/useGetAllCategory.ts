import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/apiCategory";

export const useGetAllCategory = () => {
  return useQuery({
    queryKey: ["allCategory"],
    queryFn: fetchCategories,
  });
};
