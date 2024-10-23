import EditButtons from "../components/editProduct/EditButtons";

import EditProductDescription from "../components/editProduct/EditProductDescription";
import EditProductDetailedDesc from "../components/editProduct/EditProductDetailedDesc";
import EditProductPrice from "../components/editProduct/EditProductPrice";

const EditProduct = () => {
  return (
    <section className="p-10 bg-[#F7F7F9] flex gap-5">
      <div>
        <EditProductDescription />
        <EditProductDetailedDesc />
      </div>
      <div>
        <EditProductPrice />
        <EditButtons />
      </div>
    </section>
  );
};

export default EditProduct;
