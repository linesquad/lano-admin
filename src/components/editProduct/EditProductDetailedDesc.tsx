import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../features/PostContext";
import { useGetProductById } from "../../hook/useGetProductById";

const EditProductDetailedDesc = () => {
  const { editProduct, setEditProduct } = useContext(PostContext);
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductById(id as string);

  // State for errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    brand: "",
    breed: "",
    productType: "",
    code: "",
  });

  useEffect(() => {
    if (data) {
      setEditProduct({
        _id: id || "",
        brand: data.brand,
        breed: data.breed,
        description: data.description,
        title: data.title,
        animalType: data.animalType,
        productType: data.productType,
        code: data.code,
        discount: editProduct.discount,
        price: editProduct.price,
      });
    }
  }, [data, setEditProduct]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

  
    if (value === "") {
      setEditProduct({
        ...editProduct,
        [name]: value,
      });
      setErrors((prev) => ({ ...prev, [name]: "" })); 
      return;
    }

    const lettersOnly = /^[A-Za-zა-ჰ\s]+$/;
    const alphanumericOnly = /^[A-Za-zა-ჰ0-9]*$/;

    let errorMessage = "";

    if (name === "brand" || name === "breed" || name === "productType") {
      if (!lettersOnly.test(value)) {
        errorMessage = "მხოლოდ ასოებია დაშვებული!";
      }
    } else if (name === "code") {
      if (!alphanumericOnly.test(value)) {
        errorMessage = "მხოლოდ რიცხვებია და ასოებია დაშვებული!";
      }
    }

    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
      setEditProduct({
        ...editProduct,
        [name]: value,
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <p>No Data!</p>;

  return (
    <form className="p-5 bg-white rounded-2xl mt-[29px] w-[493px]">
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
                name="brand"
                placeholder="ბრენდი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px] placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={editProduct.brand || ""}
                onChange={handleChange}
              />
           
              <p className={`text-red-500 text-sm mt-1 h-5`}>{errors.brand}</p>
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
                name="breed"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px] placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={editProduct.breed || ""}
                onChange={handleChange}
              />
          
              <p className={`text-red-500 text-sm mt-1 h-5`}>{errors.breed}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="productType"
                className="text-[#000] text-sm leading-normal"
              >
                პროდუქტის ტიპი
              </label>
              <input
                id="productType"
                type="text"
                name="productType"
                placeholder="პროდუქტის ტიპი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px] placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={editProduct.productType || ""}
                onChange={handleChange}
              />
            
              <p className={`text-red-500 text-sm mt-1 h-5`}>
                {errors.productType}
              </p>
            </div>
            <div>
              <label
                htmlFor="code"
                className="text-[#000] text-sm leading-normal"
              >
                პროდუქტის კოდი
              </label>
              <input
                id="code"
                type="text"
                name="code"
                placeholder="პროდუქტის კოდი"
                className="border border-[#00000066] outline-none py-3 px-4 rounded-[7px] mt-[8px] placeholder-[#000] placeholder:text-sm text-sm text-[#000] w-[205px]"
                value={editProduct.code || ""}
                onChange={handleChange}
              />
             
              <p className={`text-red-500 text-sm mt-1 h-5`}>{errors.code}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProductDetailedDesc;
