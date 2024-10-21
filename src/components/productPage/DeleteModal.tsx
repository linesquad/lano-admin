import { FC, useState } from "react";
import { ConfirmationModalProps } from "../../types/Product";
import HungryDog from "./HungryDog";
import { toast } from "react-toastify";

const DeleteModal: FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [hoverCount, setHoverCount] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveButton = () => {
    if (hoverCount < 3) {
      const randomX = Math.random() * 200;
      const randomY = Math.random() * 100;
      setPosition({ top: randomY, left: randomX });
      setHoverCount((prevCount) => prevCount + 1);
    }
  };

  const handleConfirm = () => {
    onConfirm();
    toast.success("პროდუქტი წარმატებით წაიშალა ✌️");
  };

  const handleOnClose = () => {
    onClose();
    setHoverCount(0);
    setPosition({ top: 0, left: 0 });
    toast.info("პროდუქტი არ წაიშალა 🫷");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-lg font-semibold pb-4">
          ნამდვილად გსურთ პროდუქტის წაშლა?
        </h2>
        <div className="flex justify-end">
          <HungryDog width="400px" height="400px" />
          <div className="flex flex-col justify-around">
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={handleOnClose}
            >
              არ მსურს
            </button>
            <button
              className="relative px-4 py-2 bg-red-500 text-white rounded transition-all duration-50"
              style={{
                transform: `translate(${position.left}px, ${position.top}px)`,
              }}
              onMouseEnter={moveButton}
              onClick={handleConfirm}
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
