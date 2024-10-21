import { Product, ProductResponse } from "../../types/Product";
import ProductsContentDisplay from "./ProductsContentDisplay";

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
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
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
      {data.products.map((item: Product) => {
        return (
          <div key={item._id}>
            <ProductsContentDisplay item={item} />
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default ProductContent;
