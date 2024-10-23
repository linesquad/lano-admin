import AddInfoProduct from "../components/addProduct/AddInfoProduct";
import AddProductDescription from "../components/addProduct/AddProductDescription";
import AddProductDetailedDesc from "../components/addProduct/AddProductDetailedDesc";
import AddProductImage from "../components/addProduct/AddProductImage";
import AddProductPrice from "../components/addProduct/AddProductPrice";
import AddButtons from "../components/addProduct/AddButtons";

const AddProduct = () => {
  return (
    <section className="p-10 bg-[#F7F7F9] flex gap-5">
      <div>
        <AddInfoProduct />
        <AddProductDescription />
        <AddProductDetailedDesc />
      </div>
      <div>
        <AddProductImage />
        <AddProductPrice />
        <AddButtons />
      </div>
    </section>
  );
};

export default AddProduct;
