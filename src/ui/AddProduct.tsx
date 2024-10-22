import AddInfoProduct from "../components/addProduct/AddInfoProduct";
import AddProductDescription from "../components/addProduct/AddProductDescription";
import AddProductDetailedDesc from "../components/addProduct/AddProductDetailedDesc";
import AddProductImage from "../components/addProduct/AddProductImage";
import AddProductPrice from "../components/addProduct/AddProductPrice";

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
        <div className="flex gap-5 mt-5 p-5">
          <button
            type="button"
            className="text-[#00000099] text-sm  px-[10px] py-[8px] border border-[#00000099] rounded-[7px] w-[154px]"
          >
            გასუფთავება
          </button>
          <button
            type="button"
            className="text-white font-semibold  bg-[#EE5335] rounded-[7px] px-[10px] py-[8px] w-[154px]"
          >
            შენახვა
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
