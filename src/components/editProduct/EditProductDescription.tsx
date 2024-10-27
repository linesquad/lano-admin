import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../features/PostContext";
import { useGetProductById } from "../../hook/useGetProductById";


const EditProductDescription = () => {
  const { editProduct, setEditProduct } = useContext(PostContext);
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductById(id as string);
  const [errorMessage, setErrorMessage] = useState("");

  const handleProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setEditProduct({
        ...editProduct,
        title: value,
      });
      setErrorMessage("");
      return;
    }

    const noNumbers = /^[A-Za-zა-ჰ\s]+$/;
    if (!noNumbers.test(value)) {
      setErrorMessage("მხოლოდ ასოებია დაშვებული!");
      return;
    }

    setErrorMessage("");

    setEditProduct({
      ...editProduct,
      title: value,
    });
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditProduct({
      ...editProduct,
      description: e.target.value,
    });
  };

  if (isLoading) return "";
  if (isError) return "";
  if (!data) return <p></p>;

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
            value={editProduct.title}
            onChange={handleProductName}
            placeholder="დასახელება"
            className="w-full border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px]
              placeholder-[#000] placeholder:text-sm text-sm text-[#000]"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm pt-3">{errorMessage}</p>
          )}
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
            value={editProduct.description}
            onChange={handleDescription}
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
