import { useContext, useState } from "react";
import { SubCategory } from "../../types/Category";
import { PostContext } from "../../features/PostContext";

const SubCategories = ({ subData }: { subData: SubCategory[] }) => {
  const { setProduct } = useContext(PostContext);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const handleActiveCategory = (categoryId: string, title: string) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      subCategoryId: categoryId,
      subCategoryTitle: title,
    }));
    setActiveCategoryId(categoryId);
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000] text-sm leading-normal">დანიშნულება</h3>
        <div className="flex gap-[10px] flex-wrap">
          {subData.map((categories) => (
            <div key={categories._id} className="">
              <button
                type="button"
                onClick={() =>
                  handleActiveCategory(categories._id, categories.title)
                }
                className={`text-[#000] text-sm p-[10px] rounded-[7px] ${
                  activeCategoryId === categories._id
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
