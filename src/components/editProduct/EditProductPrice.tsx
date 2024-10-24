import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hook/useGetProductById";
import { useContext } from "react";
import { PostContext } from "../../features/PostContext";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";

const EditProductPrice = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetProductById(id as string);
  const { setEditProduct } = useContext(PostContext);
  const [isChecked, setIsChecked] = useState(false);
  const [priceValue, setPriceValue] = useState<string>("");
  const [saleValue, setSaleValue] = useState<number | string>(0);
  const [priceError, setPriceError] = useState<string | null>(null);
  const [saleError, setSaleError] = useState<string | null>(null);

  const validatePrice = (value: string) => {
    const isValid = /^\d*\.?\d*$/.test(value);
    setPriceError(isValid || value === "" ? null : "მხოლოდ რიცხვები!");
    return isValid;
  };

  const validateSale = (value: string) => {
    const isValid = /^\d*$/.test(value);
    setSaleError(isValid || value === "" ? null : "მხოლოდ რიცხვები!");
    return isValid;
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (validatePrice(inputValue)) {
      setPriceValue(inputValue);
      setEditProduct((prevProduct) => ({
        ...prevProduct,
        price: +inputValue,
      }));
    }
  };

  const handleSaleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setSaleValue(inputValue);
      setEditProduct((prevProduct) => ({
        ...prevProduct,
        discount: 0,
      }));
      setSaleError(null);
      return;
    }

    if (validateSale(inputValue)) {
      setSaleValue(Number(inputValue));
      setEditProduct((prevProduct) => ({
        ...prevProduct,
        discount: +inputValue,
      }));
    }
  };

  useEffect(() => {
    if (data) {
      setPriceValue(data.price.$numberDecimal || "");
      setSaleValue(data.discount || 0);
    }
  }, [data]);

  useEffect(() => {
    setIsChecked(!!saleValue);
  }, [saleValue]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center w-[700px] max-w-full">
        <Loading width="350px" height="350px" />
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center flex-col items-center w-[700px] max-w-full ">
        <Error width="350px" height="350px" />
        <p className="p-1 text-red-500 font-semibold">
          {error.message} - ვერ მოიძებნა პროდუქტი
        </p>
      </div>
    );
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

          <p className={`text-red-500 text-sm mt-1 h-5`}>{priceError || " "}</p>
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

          <p className={`text-red-500 text-sm mt-1 h-5`}>{saleError || " "}</p>
        </div>
      </div>
      <div className="mt-5">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            className="hidden"
            readOnly
          />
          <div
            className={`w-5 h-5 border border-[#EE5335] rounded-sm flex items-center justify-center $ {
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
