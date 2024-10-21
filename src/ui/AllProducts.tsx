import { useLocation } from "react-router-dom";
import ProductContent from "../components/productPage/ProductContent";
import { useGetAllProducts } from "../hook/useGetAllProducts";

export default function AllProducts() {
  const location = useLocation();

  const getCurrentPage = () => {
    const params = new URLSearchParams(location.search);
    return Number(params.get("page")) || 1;
  };

  const currentPage = getCurrentPage();

  const { data, isError, isLoading, error } = useGetAllProducts(currentPage);
  // const { data, isError, isLoading, error } = useGetAllProducts();
  if (!data) return <p>No data!</p>;
  return (
    <ProductContent
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error?.message || ""}
    />
  );
}
