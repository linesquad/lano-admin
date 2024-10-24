import { IoMdCloseCircle } from "react-icons/io";
import { useAddCategory } from "../../hook/useAddCategory";
import { ChangeEvent, useState } from "react";
import { AddAnimation } from "../../ui/AddAnimation";

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
    addCategory(inputValue);
    setInputValue("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#fa755a] p-8 rounded-md flex flex-col gap-6">
        <div className="flex w-96 justify-between items-center">
          <p className="text-white font-bold">კატეგორიის დამატება</p>
          <p onClick={onClose} className="cursor-pointer">
            <IoMdCloseCircle size={35} color="white" />
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-around relative">
          <input
            type="text"
            className="border-2 border-[#f96345] focus:outline-none focus:ring-0 "
            value={inputValue}
            onChange={handleInputValue}
            placeholder="დაამატე კატეგორია"
          />
          <div></div>
          <button
            type="submit"
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
          >
            <AddAnimation width="100px" height="auto" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
