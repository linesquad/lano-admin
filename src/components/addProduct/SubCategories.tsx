import { useContext, useState } from "react";
import { SubCategory } from "../../types/Category";
import { PostContext } from "../../features/PostContext";

const SubCategories = ({ subData }: { subData: SubCategory[] }) => {
  const { setProduct } = useContext(PostContext);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const handleActiveProduct = (buttonName: string) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      subCategoryId: buttonName,
    }));
    setActiveProduct(buttonName);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[#000] text-sm leading-normal">დანიშნულება</h3>
        <div className="flex gap-[10px]">
          {subData.map((categories) => (
            <div key={categories._id}>
              <button
                type="button"
                onClick={() => handleActiveProduct(categories._id)}
                className={`text-[#000] text-sm p-[10px] rounded-[7px] ${
                  activeProduct === categories._id
                    ? "border-[#EE5335] text-[#EE5335] border"
                    : "border-transparent border"
                }`}
              >
                {categories.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
