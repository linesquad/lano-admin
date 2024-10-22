import { useState } from "react";
import { SubCategory } from "../../types/Category";

const SubCategories = ({ subData }: { subData: SubCategory[] }) => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const handleActiveProduct = (buttonName: string) => {
    setActiveProduct(buttonName);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[#000] text-sm leading-normal">კატეგორია</h3>
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
