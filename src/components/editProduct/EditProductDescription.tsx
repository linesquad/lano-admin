import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hook/useGetProductById";
import { useState, useEffect } from "react";

const EditProductDescription = () => {
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductById(id as string);
  useEffect(() => {
    if (data) {
      setProductName(data.title);
      setProductDescription(data.description);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <p>No Data!</p>;
  return (
    <form className="p-5 bg-white rounded-2xl mt-[29px] w-[493px]">
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
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="დასახელება"
            className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000]"
          />
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
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000] min-h-[96px]"
            placeholder="პროდუქტის აღწერა"
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default EditProductDescription;
