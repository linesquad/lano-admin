import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div className="flex justify-center items-center bg-[#EE5335] px-[50px] py-[10.5px] rounded-[7px] cursor-pointer">
      <Link to="/products/add">
        <span className="text-white text-sm font-semibold ">დამატება</span>
      </Link>
    </div>
  );
};

export default Add;
