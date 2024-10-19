import { NavLink } from "react-router-dom";
import logo from "/images/logo.svg";
import { FaBoxOpen } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 w-[214px] bg-[#fff] h-[100vh] py-[40px] px-[17px] flex flex-col justify-between">
      <div>
        <img src={logo} alt="logo" />
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `mt-[56px] pl-[14px] py-[10px] flex items-center gap-[11px] rounded-[8px] ${
              isActive ? "text-[#fff] bg-[#EE5335CC]" : "text-[#000] bg-[#fff]"
            }`
          }
        >
          <FaBoxOpen size={24} />
          <p className="text-[14px]">პროდუქტები</p>
        </NavLink>
      </div>
      <div className="pl-[14px] py-[10px] rounded-[8px] flex items-center gap-[11px] cursor-pointer">
        <FaSignOutAlt />
        <p className="text-[14px]">გამოსვლა</p>
      </div>
    </div>
  );
};

export default Sidebar;
