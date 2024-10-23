import { FC, useState } from "react";
import { Product } from "../../types/Product";
import { useDeleteProducts } from "../../hook/useDeleteProduct";
import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";

const ProductsContentDisplay: FC<{ item: Product }> = ({ item }) => {
  const { mutate: deleteProduct } = useDeleteProducts();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeleteProduct = () => {
    deleteProduct(item._id);
    setModalOpen(false);
  };
  return (
    <>
      <hr />
      <ul className="grid grid-cols-[2fr_repeat(5,_1fr)] text-black font-normal text-sm py-[21px]">
        <li className="flex items-center gap-2">
          <img src={item.image} alt="nugio" className="w-[30px] h-[30px]" />
          <span>{item.title}</span>
        </li>
        <li>{item.animalType}</li>
        <li>{item.productType}</li>
        <li>{`${item.price.$numberDecimal} ₾`}</li>
        <li className="text-[#EE5335] font-semibold">{`${item.discount} ₾`}</li>
        <li className="flex gap-[33px] items-center">
          <button>
            <Link to={`/products/edit/${item.catId}/${item._id}`}>
              <img src="/edit.svg" alt="edit" />
            </Link>
          </button>
          <button onClick={() => setModalOpen(true)}>
            <img src="/delete.svg" alt="delete" />
          </button>
        </li>
      </ul>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDeleteProduct}
      />
    </>
  );
};

export default ProductsContentDisplay;
