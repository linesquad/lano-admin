import { useContext } from "react";
import { EditProductInfo, PostContext } from "../../features/PostContext";
import useEditProductById from "../../hook/useEditProductById";

const EditButtons = () => {
  const { editProduct } = useContext(PostContext);
  const { mutate: editedProduct } = useEditProductById();
  const handleEditProduct = (handeledProducts: EditProductInfo) => {
    editedProduct(handeledProducts);
  };

  return (
    <div className="flex gap-5 mt-5 p-5">
      <button
        type="button"
        className="text-white font-semibold bg-[#EE5335] rounded-[7px] px-[10px] py-[8px] w-[154px]"
        onClick={() => handleEditProduct(editProduct)}
      >
        ჩასწორება
      </button>
    </div>
  );
};

export default EditButtons;
