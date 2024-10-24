import { useContext, useState } from "react";
import { useGetAllCategory } from "../../hook/useGetAllCategory";
import SubCategories from "./SubCategories";
import { PostContext } from "../../features/PostContext";
import { useDeleteCategory } from "../../hook/useDeleteCategory";
import { MdDeleteForever } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import Modal from "./AddCategoryModal";
import ModalSub from "./AddSubCategoryModal";
import { MdAddBox } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";

const AddInfoProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setProduct } = useContext(PostContext);
  const [activeAnimal, setActiveAnimal] = useState<string | null>(null);
  const { data, isLoading, isError } = useGetAllCategory();
  const { mutate: deleteCategory } = useDeleteCategory();
  const [isOpenSubModal, setIsOpenSubModal] = useState(false);
  const [selectedParentId, setSelectedParentId] = useState<string | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectEditId, setSelectEditId] = useState<string | null>(null);
  const [animalTitle, setAnimalTitle] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <p>No Data!</p>;

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsOpenSubModal(false);
    setEditModalOpen(false);
  };

  const handleOpenModalSub = (parentId: string) => {
    setSelectedParentId(parentId);
    setIsOpenSubModal(true);
  };

  const handleOpenModalEdit = (parentId: string, animalTitle: string) => {
    setSelectEditId(parentId);
    setAnimalTitle(animalTitle);
    setEditModalOpen(true);
  };

  return (
    <div className="p-5 bg-white rounded-2xl w-[493px] h-[350px] relative">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-[#000] font-semibold leading-normal">
            ინფორმაცია პროდუქტზე
          </h1>
          <IoAddCircle
            color="#EE5335"
            size={35}
            className="cursor-pointer"
            onClick={handleOpenModal}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[#000] text-sm leading-normal">კატეგორია</h3>
          <div className="flex gap-[10px] flex-wrap">
            {data.map((animal) => (
              <div key={animal._id}>
                <div className="flex items-center">
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
                  <div className="flex gap-1 items-center">
                    <div className="flex flex-col">
                      <button onClick={() => handleDeleteCategory(animal._id)}>
                        <MdDeleteForever color="#EE5335" size={20} />
                      </button>
                      <button onClick={() => handleOpenModalSub(animal._id)}>
                        <MdAddBox color="#EE5335" size={20} />
                      </button>
                    </div>
                    <div className="cursor-pointer">
                      <button
                        onClick={() =>
                          handleOpenModalEdit(animal._id, animal.title)
                        }
                      >
                        <FaEdit color="#EE5335" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute left-5 bottom-0">
                  {activeAnimal === animal._id && (
                    <SubCategories subData={animal.subCategory} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      {selectedParentId && (
        <ModalSub
          isOpen={isOpenSubModal}
          onClose={handleCloseModal}
          parentId={selectedParentId}
        />
      )}
      <EditModal
        isOpen={editModalOpen}
        onClose={handleCloseModal}
        categoryID={selectEditId}
        animalTitle={animalTitle}
      />
    </div>
  );
};

export default AddInfoProduct;
