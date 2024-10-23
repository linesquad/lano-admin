import { useContext, useState } from "react";
import { PostContext } from "../../features/PostContext";

const AddProductDetailedDesc = () => {
  const { product, setProduct } = useContext(PostContext);
  const [errorBrand, setErrorBrand] = useState("");
  const [errorBreed, setErrorBreed] = useState("");
  const [errorWeight, setErrorWeight] = useState("");
  const [errorPType, setErrorPType] = useState("");
  const [errorTaste, setErrorTaste] = useState("");
  const [errorPcode, setErrorPcode] = useState("");

  const handleProductBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct({
      ...product,
      brand: e.target.value,
    });

    if (value.trim() === "") {
      setErrorBrand("ბრენდის დასახელება არ უნდა იყოს ცარიელი");
    } else if (value.trim().length < 2) {
      setErrorBrand("ბრენდის დასახელება უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს");
    } else if (value.trim().length > 15) {
      setErrorBrand("ბრენდის დასახელება უნდა შეიცავდეს მაქსიმუმ 15 სიმბოლოს");
    } else {
      setErrorBrand("");
    }
  };

  const handleProductBreedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct({
      ...product,
      breed: e.target.value,
    });

    if (value.trim() === "") {
      setErrorBreed("ჯიშის დასახელება არ უნდა იყოს ცარიელი");
    } else if (value.trim().length < 2) {
      setErrorBreed("ჯიშის დასახელება უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს");
    } else if (value.trim().length > 15) {
      setErrorBreed("ჯიშის დასახელება უნდა შეიცავდეს მაქსიმუმ 15 სიმბოლოს");
    } else {
      setErrorBreed("");
    }
  };

  const handleProductWeightChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setProduct({
      ...product,
      weight: e.target.value,
    });
    if (value.trim() === "") {
      setErrorWeight("წონა არ უნდა იყოს ცარიელი");
    } else if (value.trim().length > 10) {
      setErrorWeight("წონა უნდა შეიცავდეს მაქსიმუმ 10 სიმბოლოს");
    } else {
      setErrorWeight("");
    }
  };

  const handleProducTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct({
      ...product,
      productType: e.target.value,
    });
    if (value.trim() === "") {
      setErrorPType("პროდუქტის ტიპი არ უნდა იყოს ცარიელი");
    } else if (value.trim().length < 2) {
      setErrorPType("პროდუქტის ტიპი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს");
    } else if (value.trim().length > 15) {
      setErrorPType("პროდუქტის ტიპი უნდა შეიცავდეს მაქსიმუმ 15 სიმბოლოს");
    } else {
      setErrorPType("");
    }
  };

  const handleProducTasteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct({
      ...product,
      taste: e.target.value,
    });
    if (value.trim() === "") {
      setErrorTaste("არომატის დასახელება არ უნდა იყოს ცარიელი");
    } else if (value.trim().length < 2) {
      setErrorTaste("არომატის დასახელება უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს");
    } else if (value.trim().length > 15) {
      setErrorTaste("არომატის დასახელება უნდა შეიცავდეს მაქსიმუმ 15 სიმბოლოს");
    } else {
      setErrorTaste("");
    }
  };

  const handleProducCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct({
      ...product,
      productCode: e.target.value,
    });
    if (value.trim() === "") {
      setErrorPcode("პროდუქტის კოდი არ უნდა იყოს ცარიელი");
    } else if (value.trim().length < 2) {
      setErrorPcode("პროდუქტის კოდი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს");
    } else if (value.trim().length > 20) {
      setErrorPcode("პროდუქტის კოდი უნდა შეიცავდეს მაქსიმუმ 20 სიმბოლოს");
    } else {
      setErrorPcode("");
    }
  };

  return (
    <div className="p-5 bg-white rounded-2xl mt-[29px] w-[493px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[#000] font-semibold leading-normal">
          პროდუქტის დეტალური აღწერა
        </h2>
        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="brand"
                className="text-[#000] text-sm leading-normal"
              >
                ბრენდი
              </label>
              <input
                id="brand"
                type="text"
                placeholder="ბრენდი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={product.brand}
                onChange={handleProductBrandChange}
                required
              />
              {errorBrand && (
                <p className="text-red-500 text-xs mt-1">{errorBrand}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="breed"
                className="text-[#000] text-sm leading-normal"
              >
                ჯიში
              </label>
              <input
                id="breed"
                type="text"
                placeholder="ჯიში"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={product.breed}
                onChange={handleProductBreedChange}
                required
              />
              {errorBreed && (
                <p className="text-red-500 text-xs mt-1">{errorBreed}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="weight"
                className="text-[#000] text-sm leading-normal"
              >
                წონა
              </label>
              <input
                id="weight"
                type="text"
                placeholder="წონა"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={product.weight}
                onChange={handleProductWeightChange}
                required
              />
              {errorWeight && (
                <p className="text-red-500 text-xs mt-1">{errorWeight}</p>
              )}
            </div>
          </div>
          {/* მეორე მწკრივი */}
          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="pType"
                className="text-[#000] text-sm leading-normal"
              >
                პროდუქტის ტიპი
              </label>
              <input
                id="pType"
                type="text"
                placeholder="პროდუქტის ტიპი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={product.productType}
                onChange={handleProducTypeChange}
                required
              />
              {errorPType && (
                <p className="text-red-500 text-xs mt-1">{errorPType}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="taste"
                className="text-[#000] text-sm leading-normal"
              >
                არომატი
              </label>
              <input
                id="taste"
                type="text"
                placeholder="არომატი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={product.taste}
                onChange={handleProducTasteChange}
                required
              />
              {errorTaste && (
                <p className="text-red-500 text-xs mt-1">{errorTaste}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="pcode"
                className="text-[#000] text-sm leading-normal"
              >
                პროდუქტის კოდი
              </label>
              <input
                id="pcode"
                type="text"
                placeholder="პროდუქტის კოდი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={product.productCode}
                onChange={handleProducCodeChange}
                required
              />
              {errorPcode && (
                <p className="text-red-500 text-xs mt-1">{errorPcode}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDetailedDesc;
