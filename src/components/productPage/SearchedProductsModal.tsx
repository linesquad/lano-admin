import { useEffect, useRef, useState } from "react";
import { SearchProduct } from "../../types/Product";
import DeleteModal from "./DeleteModal";
import { useDeleteProducts } from "../../hook/useDeleteProduct";
import { Link } from "react-router-dom";

interface SearchedProductsModalProps {
  data: SearchProduct[] | undefined;
  onClose: () => void;
  clearInput: () => void;
  showSearchedProducts: boolean;
  inputRef: HTMLInputElement | null;
}
export default function SearchedProductsModal({
  data,
  onClose,
  clearInput,
  showSearchedProducts,
  inputRef,
}: SearchedProductsModalProps) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const { mutate: deleteProduct } = useDeleteProducts();
  console.log(data, "our data");
  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    console.log(id, "id");
    setDeleteModalOpen(false);
  };
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        inputRef &&
        !inputRef.contains(e.target as Node)
      ) {
        onClose();
        clearInput();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, clearInput, inputRef]);
  console.log(data, "our data");
  if (!data) return <p>No Data!</p>;
  return (
    <div>
      <div
        ref={modalRef}
        className={`${
          showSearchedProducts &&
          "absolute top-[70px] w-[400px] max-h-[300px]  overflow-y-auto left-[-21px] shadow-lg shadow-gray-500 rounded-[7px] px-[20px] flex flex-col bg-[white]"
        }`}
      >
        {data.map((product) => (
          <ul
            key={product._id}
            className="text-black font-normal flex items-center gap-[30px] text-sm py-[18px]"
          >
            <img
              src={product.image}
              alt="product"
              className="w-[30px] h-[30px]"
            />
            <span className="text-nowrap">{product.title}</span>
            <div className="flex w-[60px] items-center justify-center gap-[10px]">
              <li className="text-[12px] line-through text-nowrap">{`${product.price.$numberDecimal} ₾`}</li>
              <li className="text-[#EE5335] text-[12px] text-nowrap font-semibold">{`${product.discount} ₾`}</li>
            </div>
            <li className="flex gap-[5px] items-center">
              <button className="p-2 cursor-pointer ">
                <Link to={`/products/edit/${product._id}`}>
                  <img src="/edit.svg" alt="edit" />
                </Link>
              </button>
              <button
                onClick={() => setDeleteModalOpen(true)}
                className="p-2 cursor-pointer "
              >
                <img src="/delete.svg" alt="delete" />
              </button>
            </li>
            <DeleteModal
              isOpen={isDeleteModalOpen}
              onClose={() => setDeleteModalOpen(false)}
              onConfirm={() => handleDeleteProduct(product._id)}
            />
          </ul>
        ))}
      </div>
    </div>
  );
}
