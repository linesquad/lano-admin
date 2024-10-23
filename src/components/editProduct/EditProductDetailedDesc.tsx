import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hook/useGetProductById";
import { useEffect, useState } from "react";

const EditProductDetailedDesc = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductById(id as string);

  const [brandValue, setBrandValue] = useState<string>("");
  const [breedValue, setBreedValue] = useState<string>("");
  const [weightValue, setWeightValue] = useState<string>("");
  const [pTypeValue, setPTypeValue] = useState<string>("");
  const [tasteValue, setTasteValue] = useState<string>("");
  const [pCodeValue, setPCodeValue] = useState<string>("");

  useEffect(() => {
    if (data) {
      setBrandValue(data.brand || "");
      setBreedValue(data.breed || "");
      setWeightValue(data.mealDetails.weight || "");
      setPTypeValue(data.productType || "");
      setTasteValue(data.mealDetails.aroma || "");
      setPCodeValue(data.code || "");
    }
  }, [data]);

  if (!data) return <p>No Data!</p>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="p-5 bg-white rounded-2xl mt-[29px] w-[493px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[#000] font-semibold leading-normal">
          პროდუქტის დეტალური აღწერა
        </h2>
        <form className="flex gap-5 items-center">
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
                value={brandValue}
                onChange={(e) => setBrandValue(e.target.value)}
                placeholder="ბრენდი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
            placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
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
                value={breedValue}
                onChange={(e) => setBreedValue(e.target.value)}
                placeholder="ჯიში"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
            placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
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
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
                placeholder="წონა"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
            placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
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
                value={pTypeValue}
                onChange={(e) => setPTypeValue(e.target.value)}
                placeholder="პროდუქტის ტიპი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
            placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
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
                value={tasteValue}
                onChange={(e) => setTasteValue(e.target.value)}
                placeholder="არომატი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
            placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
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
                value={pCodeValue}
                onChange={(e) => setPCodeValue(e.target.value)}
                placeholder="პროდუქტის კოდი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
            placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductDetailedDesc;
