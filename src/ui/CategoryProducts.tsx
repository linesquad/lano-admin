import { useParams } from "react-router-dom";
import { useGetCategoryProducts } from "../hook/useGetCategoryProducts";
import ProductContent from "../components/productPage/ProductContent";

export default function CategoryProducts() {
  const { categoryId } = useParams();

  const validCategoryId = categoryId || "";

  const { isLoading, isError, error, data } =
    useGetCategoryProducts(validCategoryId);
  console.log(data);
  return (
    <ProductContent
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error?.message || ""}
    />
  );
}
