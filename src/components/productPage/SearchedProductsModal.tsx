import { useEffect, useRef, useState } from "react";
import { SearchResponse } from "../../types/Product";
import DeleteModal from "./DeleteModal";
import { useDeleteProducts } from "../../hook/useDeleteProduct";

interface SearchedProductsModalProps {
  data: SearchResponse | undefined;
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
  console.log(data, "from modal");
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const { mutate: deleteProduct } = useDeleteProducts();
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
  }, [onClose, clearInput]);
  console.log(showSearchedProducts, "showSearchedProducts");
  return (
    <div>
      <div
        ref={modalRef}
        className={`${
          showSearchedProducts &&
          "absolute top-[70px] w-[400px] max-h-[300px]  overflow-y-auto left-[-21px] shadow-lg shadow-gray-500 rounded-[7px] p-[20px] flex flex-col bg-[white]"
        }`}
      >
        {data &&
          Array.isArray(data) &&
          data.length > 0 &&
          data.map((product) => (
            <ul
              key={product._id}
              className="text-black font-normal flex items-center gap-[30px] text-sm py-[21px]"
            >
              <img
                src={product.image}
                alt="product"
                className="w-[30px] h-[30px]"
              />
              <span className="text-nowrap">{product.title}</span>
              <div className="flex gap-[10px]">
                <li className="text-[12px] line-through text-nowrap">{`${product.price.$numberDecimal} ₾`}</li>
                <li className="text-[#EE5335] text-[12px] text-nowrap font-semibold">{`${product.discount} ₾`}</li>
              </div>
              <li className="flex gap-[5px] items-center">
                <button className="p-2 cursor-pointer ">
                  <img src="/edit.svg" alt="edit" />
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
