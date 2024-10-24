import { useContext } from "react";
import { PostContext } from "../../features/PostContext";
import useAddProduct from "../../hook/useAddProduct";

const AddButtons = () => {
  const { mutate: addProduct } = useAddProduct();
  const { product } = useContext(PostContext);

  const handleAddProduct = () => {
    addProduct({
      brand: product.brand,
      productType: product.subCategoryTitle,
      description: product.productDescription,
      title: product.productName,
      discount: product.discount,
      animalType: product.animalTitle,
      price: product.price,
      image: product.image,
      catId: product.subCategoryId,
      mealDetails: {
        weight: product.weight,
        aroma: product.taste,
        age: "9",
        breed: product.breed,
      },
      breed: product.breed,
      code: product.productCode,
    });
  };

  return (
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
        onClick={handleAddProduct}
      >
        შენახვა
      </button>
    </div>
  );
};

export default AddButtons;
