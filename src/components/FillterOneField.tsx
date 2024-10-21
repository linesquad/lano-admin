import { ICategory } from "../types/categories";

interface FillterOneFieldProps {
  title: string;
  fillterItems: ICategory[];
  category: number | null;
  setCategory: React.Dispatch<React.SetStateAction<number | null>>;
  categoryId: string;
  setCategoryId: React.Dispatch<React.SetStateAction<string>>;
}

export default function FillterOneField({
  title,
  fillterItems,
  category,
  setCategory,
  categoryId,
  setCategoryId,
}: FillterOneFieldProps) {
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <p className="text-[14px] text-[#000000] font-semibold">{title}</p>
        <div className="flex gap-[10px] items-center">
          {fillterItems?.map((item, index) => {
            return (
              <div
                className={`p-[10px] bg-[#F7F7F9] rounded-[7px] cursor-pointer ${
                  category === index
                    ? "border-[1px] border-[#EE5335] text-[#EE5335]"
                    : "border-[1px] border-transparent"
                }`}
                key={item._id}
                onClick={() => setCategory(index)}
              >
                <p className={`text-[14px]`}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {category !== null && (
        <div className="flex flex-col gap-[16px] mt-[40px]">
          <p className="text-[14px] text-[#000000] font-semibold">{title}</p>
          <div className="flex gap-[10px] items-center">
            {fillterItems[category].subCategory.map((item) => {
              return (
                <div
                  className={`p-[10px] bg-[#F7F7F9] rounded-[7px] cursor-pointer ${
                    categoryId === item._id
                      ? "border-[1px] border-[#EE5335] text-[#EE5335]"
                      : "border-[1px] border-transparent"
                  }`}
                  key={item._id}
                  onClick={() => setCategoryId(item._id)}
                >
                  <p className={`text-[14px]`}>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
