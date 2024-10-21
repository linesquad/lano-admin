import { useState } from "react";
import { useGetAllCategory } from "../../hook/useGetAllCategory";
import SubCategories from "./SubCategories";

const AddInfoProduct = () => {
  const [activeAnimal, setActiveAnimal] = useState<string | null>(null);
  const { data, isLoading, isError } = useGetAllCategory();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <p>No Data!</p>;

  const handleActiveAnimal = (animalId: string) => {
    setActiveAnimal(animalId);
  };

  return (
    <div className="p-5 bg-white rounded-2xl w-[493px] h-[240px] relative">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#000] font-semibold leading-normal">
          ინფორმაცია პროდუქტზე
        </h1>

        <div className="flex flex-col gap-4">
          <h3 className="text-[#000] text-sm leading-normal">კატეგორია</h3>
          <div className="flex gap-[10px] ">
            {data.map((animal) => (
              
                <div key={animal._id}>
                  <button
                    type="button"
                    onClick={() => handleActiveAnimal(animal._id)}
                    className={`text-[#000] text-sm p-[10px] rounded-[7px] ${
                      activeAnimal === animal._id
                        ? "border-[#EE5335] text-[#EE5335] border"
                        : "border-transparent border"
                    }`}
                  >
                    {animal.title}
                  </button>
                  <div className="absolute left-5 bottom-3">
                    {activeAnimal === animal._id && (
                      <SubCategories subData={animal.subCategory} />
                    )}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfoProduct;
