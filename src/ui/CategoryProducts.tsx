import { useParams } from "react-router-dom";
import { useGetCategoryProducts } from "../hook/useGetCategoryProducts";
import ProductContent from "../components/productPage/ProductContent";

export default function CategoryProducts() {
  const { categoryId } = useParams();

  const validCategoryId = categoryId || "";

  const { isLoading, isError, error, data } =
    useGetCategoryProducts(validCategoryId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.message}</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  console.log(data);

  return <ProductContent data={data} />;
}
