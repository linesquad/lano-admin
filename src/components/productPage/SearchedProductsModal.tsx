import { SearchResponse } from "../../types/Product";

interface SearchedProductsModalProps {
  data: SearchResponse | undefined;
}
export default function SearchedProductsModal({
  data,
}: SearchedProductsModalProps) {
  console.log(data, "from modal");

  return (
    <div className="absolute top-[70px] w-[400px] max-h-[300px]  overflow-y-auto left-[-21px] shadow-lg shadow-gray-500 rounded-[7px] p-[20px] flex flex-col bg-[white]">
      {data &&
        Array.isArray(data) &&
        data.length > 0 &&
        data.map((product) => (
          <ul
            key={product.id}
            className="text-black font-normal flex items-center gap-[30px] text-sm py-[21px]"
          >
            <img
              src={product.image}
              alt="product"
              className="w-[30px] h-[30px]"
            />
            <span className="text-nowrap">{product.title}</span>
            <div className="flex gap-[10px]">
              <li className="text-[12px] line-through text-nowrap">{`${product.price.$numberDecimal} ₾`}</li>
              <li className="text-[#EE5335] text-[12px] text-nowrap font-semibold">{`${product.discount} ₾`}</li>
            </div>
            <li className="flex gap-[5px] items-center">
              <button className="p-2 cursor-pointer ">
                <img src="/edit.svg" alt="edit" />
              </button>
              <button className="p-2 cursor-pointer ">
                <img src="/delete.svg" alt="delete" />
              </button>
            </li>
          </ul>
        ))}
    </div>
  );
}
