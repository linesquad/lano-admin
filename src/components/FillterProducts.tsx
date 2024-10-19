import { FaTimes } from "react-icons/fa";
import FillterOneField from "./FillterOneField";
import { useEffect, useState } from "react";

const categoryItems = [
  { value: "ძაღლები" },
  { value: "კატები" },
  { value: "ჩიტები" },
];

const purposeItems = [
  { value: "საკვები" },
  { value: "აქსესუარები" },
  { value: "მოვლის საშუალებები" },
  { value: "სათამაშო" },
];

interface FillterProductsProps {
  setIsFillterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FillterProducts({
  setIsFillterModalOpen,
}: FillterProductsProps) {
  const [category, setCategory] = useState("");
  const [purpose, setPurpose] = useState("");
  const [starterPrice, setStarterPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  function hanfleFillterReset() {
    setCategory("");
    setPurpose("");
    setStarterPrice("");
    setFinalPrice("");
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 bg-[#000]/80 flex items-center justify-center"
      onClick={() => setIsFillterModalOpen(false)}
    >
      <div
        className="w-[613px] bg-[#fff] pt-[45px] pb-[40px] px-[20px] rounded-[16px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[16px] text-[#000] font-semibold">ფილტრაცია</h2>
          <FaTimes
            size={24}
            cursor="pointer"
            onClick={() => setIsFillterModalOpen(false)}
          />
        </div>
        <div className="mt-[40px] flex flex-col gap-[40px]">
          <FillterOneField
            title="კატეგორია"
            fillterItems={categoryItems}
            fillter={category}
            setFillter={setCategory}
          />
          <FillterOneField
            title="დანიშნულება"
            fillterItems={purposeItems}
            fillter={purpose}
            setFillter={setPurpose}
          />
        </div>
        <div className="mt-[40px] flex flex-col gap-[16px]">
          <p className="text-[14px] text-[#000000] font-semibold">ფასი</p>
          <div className="flex items-center gap-[10px]">
            <input
              type="text"
              className="w-[120px] h-[39px] pl-[10px] border-[1px] border-[#00000033] rounded-[7px]"
              placeholder="დან"
              value={starterPrice}
              onChange={(e) => setStarterPrice(e.target.value)}
            />
            <input
              type="text"
              className="w-[120px] h-[39px] pl-[10px] border-[1px] border-[#00000033] rounded-[7px]"
              placeholder="მდე"
              value={finalPrice}
              onChange={(e) => setFinalPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-[40px] flex items-center gap-[8px]">
          <input
            type="checkbox"
            className="w-[22px] h-[22px] rounded-[4px] cursor-pointer"
          />
          <p className="text-[14px] text-[#000000] font-semibold">SALE</p>
        </div>
        <div className="mt-[64px] flex items-center justify-center gap-[20px]">
          <button
            className="w-[174px] h-[40px] rounded-[7px] border-[1px] border-[#00000033] text-[14px] text-[#00000099]"
            onClick={hanfleFillterReset}
          >
            გასუფთავება
          </button>
          <button className="w-[174px] h-[40px] rounded-[7px] border-[1px] border-[#00000033] text-[14px] text-[#fff] bg-[#EE5335]">
            არჩევა
          </button>
        </div>
      </div>
    </div>
  );
}
