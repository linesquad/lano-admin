import { Link } from "react-router-dom";

const Add = () => {
  return (
    <Link
      to="/products/add"
      className="flex justify-center items-center bg-[#EE5335] px-[50px] py-[10.5px] rounded-[7px] cursor-pointer"
    >
      <span className="text-white text-sm font-semibold ">დამატება</span>
    </Link>
  );
};

export default Add;
