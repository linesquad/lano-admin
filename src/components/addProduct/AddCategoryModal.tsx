import { IoMdCloseCircle } from "react-icons/io";
import { useAddCategory } from "../../hook/useAddCategory";
import { ChangeEvent, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { mutate: addCategory } = useAddCategory();
  const [inputValue, setInputValue] = useState("");
  if (!isOpen) return null;

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory(inputValue, {
      onSuccess: () => {
        setInputValue("");
        console.log("Category added successfully");
      },
      onError: (error) => {
        console.error("Error adding category:", error);
      },
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#fa755a] p-4 rounded-md flex flex-col">
        <div className="flex w-96 justify-between items-center">
          <p className="text-white font-bold">კატეგორიის დამატება</p>
          <p onClick={onClose} className="cursor-pointer">
            <IoMdCloseCircle size={35} color="white" />
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-around">
          <input
            type="text"
            className="border-2 border-black"
            value={inputValue}
            onChange={handleInputValue}
            placeholder="დაამატე კატეგორია"
          />
          <button type="submit" className=" bg-blue-500 text-white rounded">
            დამატება
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
