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

        <div>
          <label
            htmlFor="productName"
            className="text-[#000] text-sm leading-normal"
          >
            პროდუქტის დასახელება
          </label>
          <input
            id="productName"
            type="text"
            placeholder="დასახელება"
            className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000]"
            value={product.productName}
            onChange={handleProductNameChange}
            required
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div>
          <label
            htmlFor="productDescription"
            className="text-[#000] text-sm leading-normal"
          >
            პროდუქტის აღწერა
          </label>
          <textarea
            id="productDescription"
            className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] min-h-[96px]"
            placeholder="პროდუქტის აღწერა"
            value={product.productDescription}
            onChange={handleProductDescriptionChange}
            required
          ></textarea>
          {errorDescription && (
            <p className="text-red-500 text-xs mt-1">{errorDescription}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductDescription;
