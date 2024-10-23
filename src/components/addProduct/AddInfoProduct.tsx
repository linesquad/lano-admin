import { ChangeEvent, useContext, useState } from "react";
import { useGetAllCategory } from "../../hook/useGetAllCategory";
import SubCategories from "./SubCategories";
import { PostContext } from "../../features/PostContext";
import { useDeleteCategory } from "../../hook/useDeleteCategory";
import { useAddCategory } from "../../hook/useAddCategory";

const AddInfoProduct = () => {
  const { setProduct } = useContext(PostContext);
  const [activeAnimal, setActiveAnimal] = useState<string | null>(null);
  const { data, isLoading, isError } = useGetAllCategory();
  const { mutate: deleteCategory } = useDeleteCategory();
  const { mutate: addCategory } = useAddCategory();
  const [inputValue, setInputValue] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <p>No Data!</p>;

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory(inputValue, {
      onSuccess: () => {
        setInputValue("");
        console.log("Category added successfully");
      },
      onError: (error) => {
        console.error("Error adding category:", error);
      },
    });
  };

  const handleActiveAnimal = (animalId: string, title: string) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      animalId: animalId,
      animalTitle: title,
    }));
    setActiveAnimal(animalId);
  };

  const handleDeleteCategory = (animalId: string) => {
    deleteCategory(animalId);
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
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => handleActiveAnimal(animal._id, animal.title)}
                    className={`text-[#000] text-sm p-[10px] rounded-[7px] ${
                      activeAnimal === animal._id
                        ? "border-[#EE5335] text-[#EE5335] border"
                        : "border-transparent border"
                    }`}
                  >
                    {animal.title}
                  </button>
                  <button onClick={() => handleDeleteCategory(animal._id)}>
                    X
                  </button>
                </div>
                <div className="absolute left-5 bottom-3">
                  {activeAnimal === animal._id && (
                    <SubCategories subData={animal.subCategory} />
                  )}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              className="border-2 border-black"
              value={inputValue}
              onChange={handleInputValue}
              placeholder="დაამატე კატეგორია"
            />
            <button type="submit" className=" bg-blue-500 text-white rounded">
              დამატება
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInfoProduct;
