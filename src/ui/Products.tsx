import ProductContent from "../components/productPage/ProductContent";
import ProductHeader from "../components/productPage/ProductHeader";

const Products = () => {
  return (
    <div className=" bg-gray-50 p-10 w-full flex flex-col gap-10">
      <ProductHeader />
      <ProductContent />
    </div>
  );
};

export default Products;
