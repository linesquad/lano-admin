import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import { Product, ProductResponse } from "../../types/Product";
import ProductsContentDisplay from "./ProductsContentDisplay";
import PaginationControls from "../PaginationControls";

interface ProductsContentProps {
  data: ProductResponse;
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const ProductContent = ({
  data,
  isLoading,
  isError,
  error,
}: ProductsContentProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loading width="400px" height="300px" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center">
        <Error width="400px" height="300px" />
        <span className="text-xl text-red-600 font-bold">{error}</span>
      </div>
    );
  }
  // || data.products.length === 0
  if (!data) {
    return <p>No data available</p>;
  }
  if (!data.lenBtns) return null;
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
