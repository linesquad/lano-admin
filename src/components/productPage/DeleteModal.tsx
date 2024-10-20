import { FC } from "react";
import { ConfirmationModalProps } from "../../types/Product";
import HungryDog from "./HungryDog";

const DeleteModal: FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          ნამდვილად გსურთ პროდუქტის წაშლა?
        </h2>
        <div className="flex justify-end">
          <HungryDog width="400px" height="400px" />
          <div className="flex flex-col justify-around">
            <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
              არ მსურს
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={onConfirm}
            >
              დიახ მსურს
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
