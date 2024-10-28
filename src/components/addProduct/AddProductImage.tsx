import { GoPlus } from "react-icons/go";
import { ChangeEvent, useContext, useRef, useState } from "react";
import UploadImageAnimation from "./UploadImageAnimation";
import { PostContext } from "../../features/PostContext";
import DeleteIcon from "./DeleteIcon";
const URL = "https://lano2024-0b1bbc3f481c.herokuapp.com/";

export interface IMGResponse {
  message: string;
  url: string;
  fileName: string | null;
}

const AddProductImage = () => {
  const { product, setProduct } = useContext(PostContext);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const image = files[0];
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await fetch(`${URL}upload`, {
          method: "POST",
          body: formData,
        });

        const result: IMGResponse = await response.json();
        if (response.ok) {
          setImgUrl(result.url);
          setProduct({
            ...product,
            image: result.url,
          });
          setFileName(result.fileName);
        } else {
          console.error("Image upload failed:", result.message);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleImgDelete = async () => {
    try {
      const response = await fetch(`${URL}delete-file?fileName=${fileName}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(
          `Failed to delete the image. Status: ${response.status}`
        );
      }
      setImgUrl(null);
      setFileName(null);
      setProduct({
        ...product,
        image: null,
      });
      console.log("Image deleted successfully");
    } catch (error) {
      console.error("Error deleting the image:", error);
    }
  };

  const handleRefClick = () => {
    if (ref.current) {
      ref.current?.click();
    }
  };

  return (
    <div className="bg-white p-5 flex flex-col gap-5 w-[370px]">
      <h2 className="text-[#000] font-semibold leading-normal">
        პროდუქტის სურათები
      </h2>
      <div>
        <div className="w-[328px] h-[328px]">
          {imgUrl ? (
            <img
              src={imgUrl}
              alt="image"
              className="object-cover bg-no-repeat"
            />
          ) : (
            <UploadImageAnimation width="full" height="full" />
          )}
        </div>
        <div className="flex gap-5 mt-5">
          <div className="cursor-pointer" onClick={handleImgDelete}>
            <DeleteIcon width="full" height="full" />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="fileUpload"
              className="flex items-center justify-center border border-dashed
               border-[#00000066] w-[154px] h-[154px] rounded-lg cursor-pointer"
            >
              <span className=" font-light">
                <GoPlus
                  className="text-[32px] text-[#00000066]"
                  onClick={handleRefClick}
                />
              </span>
            </label>
            <input
              id="fileUpload"
              type="file"
              className="hidden"
              onChange={handleImageChange}
              ref={ref}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductImage;
