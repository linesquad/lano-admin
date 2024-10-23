import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hook/useGetProductById";

const EditProductPrice = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductById(id as string);
  const [isChecked, setIsChecked] = useState(false);
  const [priceValue, setPriceValue] = useState<string>("");
  const [saleValue, setSaleValue] = useState<string>("");

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(e.target.value);
  };

  const handleSaleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaleValue(e.target.value);
  };

  useEffect(() => {
    if (data) {
      setPriceValue(data.price.$numberDecimal || "");
      setSaleValue(data.discount.toString() || "");
    }
  }, [data]);
  
  useEffect(() => {
    setIsChecked(!!saleValue);
  }, [saleValue]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="p-5 bg-white rounded-2xl mt-[29px] w-[370px]">
      <h1 className="text-[#000] font-semibold leading-normal">
        ინფორმაცია პროდუქტზე
      </h1>
      <div className="flex gap-5">
        <div className="flex flex-col gap-[9px] mt-[20px]">
          <label htmlFor="price" className="text-sm text-[#000]">
            ფასი
          </label>
          <input
            type="text"
            id="price"
            placeholder="ფასი"
            onChange={handlePriceChange}
            value={priceValue}
            className="outline-none border border-[#00000066] py-2 px-4 
            placeholder:text-sm placeholder:text-[#000] text-sm text-[#000] rounded-[7px] w-[122px]"
          />
        </div>
        <div className="flex flex-col gap-[9px] mt-[20px]">
          <label htmlFor="sale" className="text-sm text-[#000]">
            Sale
          </label>
          <input
            type="text"
            id="sale"
            onChange={handleSaleValue}
            value={saleValue}
            placeholder="sale"
            className="outline-none border border-[#00000066] py-2 px-4 font-semibold placeholder:font-semibold
            placeholder:text-sm placeholder:text-[#EE5335] text-sm text-[#EE5335] rounded-[7px] w-[122px]"
          />
        </div>
      </div>
      <div className="mt-5">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" checked={isChecked} className="hidden" readOnly/>
          <div
            className={`w-5 h-5 border border-[#EE5335] rounded-sm flex items-center justify-center ${
              isChecked ? "" : "bg-transparent"
            }`}
          >
            {isChecked && (
              <svg
                className="w-4 h-4 text-[#EE5335]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
          </div>
          <span className="ml-2 text-white bg-[#EE5335] text-sm font-semibold px-[13px] py-[6.5px] rounded-[4px]">
            SALE
          </span>
        </label>
      </div>
    </div>
  );
};

export default EditProductPrice;
