import { IoMdCloseCircle } from "react-icons/io";

import { ChangeEvent, useState } from "react";
import useAddSubCategory from "../../hook/useAddSubCategory";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  parentId: string;
}

const ModalSub: React.FC<ModalProps> = ({ isOpen, onClose, parentId }) => {
  const { mutate: addSubCategory } = useAddSubCategory();

  const [inputSub, setInputSub] = useState("");
  if (!isOpen) return null;

  const handleInputSub = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSub(e.target.value);
  };

  const handleSubmitSub = (e: React.FormEvent) => {
    e.preventDefault();
    addSubCategory({ title: inputSub, parentId: parentId });

    setInputSub("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#fa755a] p-4 rounded-md flex flex-col">
        <div className="flex w-96 justify-between items-center">
          <p className="text-white font-bold">ქვე-კატეგორიის დამატება</p>
          <p onClick={onClose} className="cursor-pointer">
            <IoMdCloseCircle size={35} color="white" />
          </p>
        </div>

        <form onSubmit={handleSubmitSub} className="flex justify-around">
          <input
            type="text"
            className="border-2 border-black"
            value={inputSub}
            onChange={handleInputSub}
            placeholder="დაამატე ქვე-კატეგორია"
          />
          <button type="submit" className=" bg-blue-500 text-white rounded">
            დამატება
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalSub;
