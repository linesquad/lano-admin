import { useContext } from "react";
import { PostContext } from "../../features/PostContext";

const AddProductDetailedDesc = () => {
  const { product, setProduct } = useContext(PostContext);

  const handleProductBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      brand: e.target.value,
    });
  };

  const handleProductBreedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      breed: e.target.value,
    });
  };

  const handleProductWeightChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProduct({
      ...product,
      weight: e.target.value,
    });
  };

  const handleProducTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      productType: e.target.value,
    });
  };

  const handleProducTasteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      taste: e.target.value,
    });
  };

  const handleProducCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      productCode: e.target.value,
    });
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
              />
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
              />
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
              />
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
              />
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
              />
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDetailedDesc;
