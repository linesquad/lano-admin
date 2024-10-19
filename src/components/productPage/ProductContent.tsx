import { useLocation } from "react-router-dom";
import { useGetAllProducts } from "../../hook/useGetAllProducts";
import ProductsContentDisplay from "./ProductsContentDisplay";
import PaginationControls from "../PaginationControls";
import { Product } from "../../types/Product";

const ProductContent = () => {
  const location = useLocation();

  const getCurrentPage = () => {
    const params = new URLSearchParams(location.search);
    return Number(params.get("page")) || 1;
  };

  const currentPage = getCurrentPage();

  const { data, isError, isLoading, error } = useGetAllProducts(currentPage);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.message}</p>;
  }

  if (!data || data.products.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="bg-white rounded-lg px-5">
      <ul className="grid grid-cols-[2fr_repeat(5,_1fr)] text-black font-semibold text-sm py-5">
        <li>სახელი</li>
        <li>კატეგორია</li>
        <li>დანიშნულება</li>
        <li>ფასი</li>
        <li>SALE</li>
        <li>ცვლილება</li>
      </ul>
      {data.products.map((item: Product) => (
        <div key={item._id}>
          <ProductsContentDisplay item={item} />
        </div>
      ))}
      <hr />

      <PaginationControls btnCount={data.lenBtns} />
    </div>
  );
};

export default ProductContent;
