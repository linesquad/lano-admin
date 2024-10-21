import ProductContent from "../components/productPage/ProductContent";
import { useSaleProducts } from "../hook/useSaleProducts";

export default function SaleProducts() {
  const { data, isLoading, isError, error } = useSaleProducts();

  return (
    <ProductContent
      data={{ products: data }}
      isError={isError}
      isLoading={isLoading}
      error={error?.message || ""}
    />
  );
}
