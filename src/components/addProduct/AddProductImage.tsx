import mainImage from "/images/product-add-image.png";
import addedImage from "/images/product-add-added.png";
import { GoPlus } from "react-icons/go";
const AddProductImage = () => {
  return (
    <div className="bg-white p-5 flex flex-col gap-5 w-[370px]">
      <h2 className="text-[#000] font-semibold leading-normal">
        პროდუქტის სურათები
      </h2>
      <div>
        <div className="w-[328px] h-[328px]">
          <img
            src={mainImage}
            alt="image"
            className="object-cover bg-no-repeat"
          />
        </div>
        <div className="flex gap-5 mt-5">
          <img
            src={addedImage}
            alt="image"
            className="border-[1.5px] rounded-lg border-[#EE5335] object-cover
             bg-no-repeat w-[154px] h-[154px]"
          />
          <div className="flex items-center">
            <label
              htmlFor="fileUpload"
              className="flex items-center justify-center border border-dashed
               border-[#00000066] w-[154px] h-[154px] rounded-lg cursor-pointer"
            >
              <span className=" font-light">
                <GoPlus className="text-[32px] text-[#00000066]" />
              </span>
            </label>
            <input id="fileUpload" type="file" className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductImage;
