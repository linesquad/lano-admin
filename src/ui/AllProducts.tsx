import ProductContent from "../components/productPage/ProductContent";
import { useGetAllProducts } from "../hook/useGetAllProducts";

export default function AllProducts() {
  const { data, isError, isLoading, error } = useGetAllProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.message}</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }
  return <ProductContent data={data} />;
}
