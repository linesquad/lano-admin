import Add from "./Add";
import Filter from "./Filter";
import Search from "./Search";

const ProductHeader = () => {
  return (
    <div className="flex bg-white justify-between p-5 rounded-lg">
      <Search />
      <div className="flex gap-5">
        <Filter />
        <Add />
      </div>
    </div>
  );
};

export default ProductHeader;
