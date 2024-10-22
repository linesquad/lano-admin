import { GoPlus } from "react-icons/go";
import { ChangeEvent, useContext, useState } from "react";
import UploadImageAnimation from "./UploadImageAnimation";
import { PostContext } from "../../features/PostContext";
const AddProductImage = () => {
  const { product, setProduct } = useContext(PostContext);
  const [image, setImage] = useState<File | null>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setProduct({
        ...product,
        image: imageUrl,
      });
    }
  };

  return (
    <div className="bg-white p-5 flex flex-col gap-5 w-[370px]">
      <h2 className="text-[#000] font-semibold leading-normal">
        პროდუქტის სურათები
      </h2>
      <div>
        <div className="w-[328px] h-[328px]">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="image"
              className="object-cover bg-no-repeat"
            />
          ) : (
            <UploadImageAnimation width="full" height="full" />
          )}
        </div>
        <div className="flex gap-5 mt-5">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="image"
              className="border-[1.5px] rounded-lg border-[#EE5335] object-cover
                 bg-no-repeat w-[154px] h-[154px]"
            />
          ) : (
            <UploadImageAnimation width="full" height="full" />
          )}
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
            <input
              id="fileUpload"
              type="file"
              className="hidden"
              onChange={handleImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductImage;
