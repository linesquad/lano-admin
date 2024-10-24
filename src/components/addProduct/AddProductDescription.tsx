import { useContext, useState } from "react";
import { PostContext } from "../../features/PostContext";

const AddProductDescription = () => {
  const { product, setProduct } = useContext(PostContext);
  const [error, setError] = useState("");
  const [errorDescription, setErrorDescription] = useState("");

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct({
      ...product,
      productName: e.target.value,
    });

    if (value.trim() === "") {
      setError("პროდუქტის დასახელება არ უნდა იყოს ცარიელი");
    } else if (value.trim().length < 3) {
      setError("პროდუქტის დასახელება უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს");
    } else if (value.trim().length > 20) {
      setError("პროდუქტის დასახელება უნდა შეიცავდეს მაქსიმუმ 20 სიმბოლოს");
    } else {
      setError("");
    }
  };

  const handleProductDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setProduct({
      ...product,
      productDescription: e.target.value,
    });
    if (value.trim() === "") {
      setErrorDescription("პროდუქტის აღწერა არ უნდა იყოს ცარიელი");
    } else if (value.trim().length < 3) {
      setErrorDescription("პროდუქტის აღწერა უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს");
    } else if (value.trim().length > 5000) {
      setErrorDescription(
        "პროდუქტის აღწერა უნდა შეიცავდეს მაქსიმუმ 5000 სიმბოლოს"
      );
    } else {
      setErrorDescription("");
    }
  };

  return (
    <div className="p-5 bg-white rounded-2xl mt-[29px] w-[493px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[#000] font-semibold leading-normal">
          ინფორმაცია პროდუქტზე
        </h2>

        <div className="h-24">
          <label
            htmlFor="productName"
            className="text-[#000] text-sm leading-normal"
          >
            პროდუქტის დასახელება
          </label>
          <div className="relative ">
            <input
              id="productName"
              type="text"
              placeholder="დასახელება"
              className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[10px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000]"
              value={product.productName}
              onChange={handleProductNameChange}
              required
              minLength={3}
            />
            {error && (
              <div className="absolute top-full mt-1 bg-white text-center shadow-md rounded-md p-2 w-full">
                <p className="text-red-500 text-xs font-bold">{error}</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="productDescription"
            className="text-[#000] text-sm leading-normal"
          >
            პროდუქტის აღწერა
          </label>
          <div className="relative">
            <textarea
              id="productDescription"
              className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] min-h-[96px]"
              placeholder="პროდუქტის აღწერა"
              value={product.productDescription}
              onChange={handleProductDescriptionChange}
              required
              minLength={3}
              maxLength={5000}
            ></textarea>
            {errorDescription && (
              <div className="absolute top-full mt-1 bg-white text-center shadow-md rounded-md p-2 w-full">
                <p className="text-red-500 text-xs font-bold">
                  {errorDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDescription;
