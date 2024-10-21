import { useParams } from "react-router-dom";
import { useProductsWithPriceRange } from "../hook/useProductsWithPriceRange";
import ProductContent from "../components/productPage/ProductContent";

export default function PriceRangeProducts() {
  const { minPrice, maxPrice } = useParams();

  const validMinPrice = minPrice || "";
  const validMaxPrice = maxPrice || "";

  const { data, isLoading, isError, error } = useProductsWithPriceRange(
    validMinPrice,
    validMaxPrice
  );

  return (
    <ProductContent
      data={{ products: data }}
      isLoading={isLoading}
      isError={isError}
      error={error?.message || ""}
    />
  );
}
