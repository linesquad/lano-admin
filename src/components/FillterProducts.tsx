import { FaTimes } from "react-icons/fa";
import FillterOneField from "./FillterOneField";
import { useEffect, useState } from "react";
import { useGetAllCategories } from "../hook/useGetAllCategories";
import { useNavigate } from "react-router-dom";

interface FillterProductsProps {
  setIsFillterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FillterProducts({
  setIsFillterModalOpen,
}: FillterProductsProps) {
  const [category, setCategory] = useState<number | null>(null);
  const [categoryId, setCategoryId] = useState("");
  const [starterPrice, setStarterPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [isSaleChecked, setIsSaleChecked] = useState(false);

  const navigate = useNavigate();

  const { data: categories, isLoading } = useGetAllCategories();
  console.log(categories);

  function hanfleFillterReset() {
    setCategory(null);
    setCategoryId("");
    setStarterPrice("");
    setFinalPrice("");
    setIsSaleChecked(false);
  }

  function handleChooseCategory() {
    navigate(`/products/${categoryId}`);
    setIsFillterModalOpen(false);
  }

  function handleChoosePrice() {
    navigate(`/products/minPrice/${starterPrice}/maxPrice/${finalPrice}`);
    setIsFillterModalOpen(false);
  }

  function handleSaleProducts() {
    navigate("/products/saleProducts");
    setIsFillterModalOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#000]/80 flex items-center justify-center">
        <div className="w-[613px] bg-[#fff] pt-[45px] pb-[40px] px-[20px] rounded-[16px]">
          <div className="flex justify-between items-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (!categories) {
    return <p>No Categories to show</p>;
  }

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
        <div>
          <div className="mt-[40px] ">
            <FillterOneField
              title="კატეგორია"
              fillterItems={categories}
              category={category}
              setCategory={setCategory}
              categoryId={categoryId}
              setCategoryId={setCategoryId}
            />
          </div>
          {category !== null && categoryId !== "" && (
            <button
              className="w-[124px] h-[40px] mt-[10px] rounded-[7px] border-[1px] border-[#00000033] text-[14px] text-[#fff] bg-[#EE5335]"
              onClick={handleChooseCategory}
            >
              არჩევა
            </button>
          )}
        </div>

        <div className="mt-[40px] flex flex-col gap-[16px]">
          <p className="text-[14px] text-[#000000] font-semibold">ფასი</p>
          <div className="flex items-center gap-[10px]">
            <input
              type="text"
              className="w-[120px] h-[39px] pl-[10px] border-[1px] border-[#00000033] rounded-[7px]"
              placeholder="დან"
              value={starterPrice}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setStarterPrice(value);
                }
              }}
              pattern="\d*"
              title="Please enter a valid number"
            />

            <input
              type="text"
              className="w-[120px] h-[39px] pl-[10px] border-[1px] border-[#00000033] rounded-[7px]"
              placeholder="მდე"
              value={finalPrice}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setFinalPrice(value);
                }
              }}
              pattern="\d*"
              title="Please enter a valid number"
            />

            {starterPrice !== "" &&
              finalPrice !== "" &&
              Number(starterPrice) < Number(finalPrice) && (
                <button
                  className="w-[124px] ml-[30px] h-[40px] rounded-[7px] border-[1px] border-[#00000033] text-[14px] text-[#fff] bg-[#EE5335]"
                  onClick={handleChoosePrice}
                >
                  არჩევა
                </button>
              )}
          </div>
        </div>
        <div className="mt-[40px] flex items-center gap-[8px] h-[40px]">
          <input
            type="checkbox"
            className="w-[22px] h-[22px] rounded-[4px] cursor-pointer"
            checked={isSaleChecked}
            onChange={() => setIsSaleChecked((sale) => !sale)}
          />
          <p className="text-[14px] text-[#000000] font-semibold">SALE</p>
          {isSaleChecked && (
            <button
              className="w-[124px] ml-[30px] h-[40px] rounded-[7px] border-[1px] border-[#00000033] text-[14px] text-[#fff] bg-[#EE5335]"
              onClick={handleSaleProducts}
            >
              არჩევა
            </button>
          )}
        </div>
        <div className="mt-[64px] flex items-center justify-center gap-[20px]">
          <button
            className="w-[174px] h-[40px] rounded-[7px] border-[1px] border-[#00000033] text-[14px] text-[#00000099]"
            onClick={hanfleFillterReset}
          >
            გასუფთავება
          </button>
        </div>
      </div>
    </div>
  );
}
