import { useContext, useState } from "react";
import { SubCategory } from "../../types/Category";
import { PostContext } from "../../features/PostContext";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteCategory } from "../../hook/useDeleteCategory";
import { FaEdit } from "react-icons/fa";
import EditModalSubCategory from "./EditModalSubCategory";

const SubCategories = ({ subData }: { subData: SubCategory[] }) => {
  const { mutate: deleteSubCategory } = useDeleteCategory();
  const { setProduct } = useContext(PostContext);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectEditId, setSelectEditId] = useState<string | null>(null);
  const [animalTitle, setAnimalTitle] = useState("");

  const handleActiveCategory = (categoryId: string, title: string) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      subCategoryId: categoryId,
      subCategoryTitle: title,
    }));
    setActiveCategoryId(categoryId);
  };

  const handleDeleteSubCat = (subCatID: string) => {
    deleteSubCategory(subCatID);
  };
  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  const handleOpenModalEdit = (parentId: string, animalTitle: string) => {
    setSelectEditId(parentId);
    setAnimalTitle(animalTitle);
    setEditModalOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#000] text-sm leading-normal">დანიშნულება</h3>
        <div className="flex gap-[10px] flex-wrap">
          {subData.map((categories) => (
            <div key={categories._id} className="flex items-center">
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
              <button onClick={() => handleDeleteSubCat(categories._id)}>
                <MdDeleteForever color="#EE5335" size={20} />
              </button>
              <button
                onClick={() =>
                  handleOpenModalEdit(categories._id, categories.title)
                }
              >
                <FaEdit color="#EE5335" size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <EditModalSubCategory
        isOpen={editModalOpen}
        onClose={handleCloseModal}
        categoryID={selectEditId}
        animalTitle={animalTitle}
      />
    </div>
  );
};

export default SubCategories;
