import { useContext, useState } from "react";
import { PostContext } from "../../features/PostContext";

const AddProductPrice = () => {
  const { product, setProduct } = useContext(PostContext);
  const [isChecked, setIsChecked] = useState(false);
  const [errorPrice, setErrorPrice] = useState("");
  const [errorDiscount, setErrorDiscount] = useState("");

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setProduct((prevProduct) => ({
      ...prevProduct,
      discountFlag: newCheckedState,
    }));
  };

  const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let price = +value;

    if (isNaN(price) || price < 0) {
      setErrorPrice("ფასი უნდა იყოს დადებითი რიცხვი");
      price = 0;
    } else {
      setErrorPrice("");
    }

    setProduct({
      ...product,
      price: price,
    });
  };

  const handleProductDiscountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    let discount = +value;

    if (discount > 100) {
      setErrorDiscount("ფასდაკლება არ შეიძლება იყოს 100-ზე მეტი");
      return;
    } else if (isNaN(discount) || discount <= 0) {
      discount = 0;
    } else {
      setErrorDiscount("");
    }

    setProduct({
      ...product,
      discount: discount,
    });
  };

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
            className="outline-none border border-[#00000066] py-2 px-4 
            placeholder:text-sm placeholder:text-[#000] text-sm text-[#000] rounded-[7px] w-[122px]"
            value={product.price}
            onChange={handleProductPriceChange}
          />
          {errorPrice && (
            <p className="text-red-500 text-xs mt-1">{errorPrice}</p>
          )}
        </div>
        <div className="flex flex-col gap-[9px] mt-[20px]">
          <label htmlFor="sale" className="text-sm text-[#000]">
            Sale
          </label>
          <input
            type="text"
            id="sale"
            placeholder="sale"
            className="outline-none border border-[#00000066] py-2 px-4 font-semibold placeholder:font-semibold
            placeholder:text-sm placeholder:text-[#EE5335] text-sm text-[#EE5335] rounded-[7px] w-[122px]"
            value={product.discount}
            onChange={handleProductDiscountChange}
          />
          {errorDiscount && (
            <p className="text-red-500 text-xs mt-1">{errorDiscount}</p>
          )}
        </div>
        <div></div>
      </div>
      <div className="mt-5">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="hidden"
          />
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

export default AddProductPrice;
