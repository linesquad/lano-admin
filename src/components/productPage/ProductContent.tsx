import { useGetAllProducts } from "../../hook/useGetAllProducts";
import ProductsContentDisplay from "./ProductsContentDisplay";

const ProductContent = () => {
  const { data, isError, isLoading, error } = useGetAllProducts();
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.message}</p>;
  }

  if (!data) {
    return <p>No data</p>;
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
      {data.products.map((item) => {
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
