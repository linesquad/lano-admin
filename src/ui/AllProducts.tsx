import ProductContent from "../components/productPage/ProductContent";
import { useGetAllProducts } from "../hook/useGetAllProducts";
import { ProductResponse } from "../types/Product";

const defaultProductResponse: ProductResponse = {
  products: [],
  page: 0,
  lenBtns: 0,
};

export default function AllProducts() {
  const { data, isError, isLoading, error } = useGetAllProducts();

  return (
    <ProductContent
      data={data || defaultProductResponse}
      isLoading={isLoading}
      isError={isError}
      error={error?.message || ""}
    />
  );
}
