const ProductsContentDisplay = ({ item }) => {
  return (
    <>
      <ul
        key={item._id}
        className="grid grid-cols-[2fr_repeat(5,_1fr)] text-black font-normal text-sm py-[21px]"
      >
        <li className="flex items-center gap-2">
          <img src={item.image} alt="nugio" className="w-[30px] h-[30px]" />
          <span>{item.brand}</span>
        </li>
        <li>{item.animalType}</li>
        <li>{item.productType}</li>
        <li>{`${item.price.$numberDecimal} ₾`}</li>
        <li className="text-[#EE5335] font-semibold">{`${item.discount} ₾`}</li>
        <li>edit & delete</li>
      </ul>
      <hr />
    </>
  );
};

export default ProductsContentDisplay;
